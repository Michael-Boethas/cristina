// Takes an element to observe and add classes to, returns a cleanup function
export function viewportAddClasses(
  element: Element,
  classes: string,
  options: IntersectionObserverInit = {
    root: null, // Observe within the whole viewport
    threshold: 0.05, // Triggers when the element is 5% visible
  },
) {
  // Add classes to matching entries
  function addClasses(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(classes);
      }
    });
  }

  // Create an observer with addClasses as callback
  const observer = new IntersectionObserver(addClasses, options);

  // Observe the element
  observer.observe(element);

  // Return cleanup function
  return () => observer.disconnect();
}