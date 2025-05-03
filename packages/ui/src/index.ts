// This is the entry point for the @tiledocs/ui package.

export function createButton(text: string) {
    const button = document.createElement('button');
    button.textContent = text;
    // Add some basic styling or classes here
    return button;
}

// You can export other UI components here.
