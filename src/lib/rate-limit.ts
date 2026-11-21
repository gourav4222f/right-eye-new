import "server-only";

/**
 * Small in-memory sliding-window rate limiter. Suitable for a single Node.js
 * instance (e.g. Hostinger Node hosting). For multi-instance or serverless
 * deployments, replace with a shared store such as Redis.
 */

const buckets = new Map<string, number[]>();
const MAX_KEYS = 5000;

export function rateLimit(key: string, limit: number, windowMs: number, now = Date.now()): { allowed: boolean; retryAfterSec: number } {
  const windowStart = now - windowMs;
  const hits = (buckets.get(key) ?? []).filter((t) => t > windowStart);

  if (hits.length >= limit) {
    const retryAfterSec = Math.max(1, Math.ceil((hits[0]! + windowMs - now) / 1000));
    buckets.set(key, hits);
    return { allowed: false, retryAfterSec };
  }

  hits.push(now);
  buckets.set(key, hits);

  if (buckets.size > MAX_KEYS) {
    // Drop the oldest entries to bound memory.
    const excess = buckets.size - MAX_KEYS;
    let i = 0;
    for (const k of buckets.keys()) {
      if (i++ >= excess) break;
      buckets.delete(k);
    }
  }
  return { allowed: true, retryAfterSec: 0 };
}

export function resetRateLimits() {
  buckets.clear();
}
