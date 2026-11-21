/**
 * Animated aurora / gradient-mesh background in Dracula colors.
 * Pure CSS: pre-blurred radial gradients moved with transform only (cheap on mobile GPUs).
 */
export const Aurora = ({ className = "" }: { className?: string }) => (
  <div className={`aurora pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
    <span className="aurora-blob aurora-1" />
    <span className="aurora-blob aurora-2" />
    <span className="aurora-blob aurora-3" />
    <span className="aurora-blob aurora-4" />
    <span className="aurora-grid" />
    <span className="aurora-fade" />
  </div>
);
