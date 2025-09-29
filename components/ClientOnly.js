import { useState, useEffect } from 'react';

/**
 * ClientOnly component prevents hydration mismatches by only rendering children on the client side.
 * This is useful for components that depend on browser APIs or have different server/client behavior.
 */
export default function ClientOnly({ children, fallback = null }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return children;
}
