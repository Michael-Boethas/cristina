// Takes an array of strings and line break markers and returns a React element
export function renderWithLineBreaks(
  contentArray: Array<string | React.ReactNode>,
): React.ReactNode[] {
  return contentArray.map((item, index) =>
    item === "[br]" ? <br key={`line-break-${index}`} /> : item,
  );
}

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
