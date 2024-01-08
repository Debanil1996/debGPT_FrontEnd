import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[debGptTypewriting]',
})
export class TypewritingDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  formatArbitraryCode(code: string) {
    // Add line breaks after semicolons and braces.
    const formattedString = code.replace(/;|{|}/g, (match: any) => {
      return match + '\n';
    });

    // Split the string into lines and trim each line.
    const lines = formattedString.split('\n').map((line: any) => line.trim());

    // Join the lines back together.
    return lines.join('\n');
  }
  ngAfterViewInit(): void {
    // Get the text content of the element
    const text = this.el.nativeElement.textContent.trim();
    // Clear the element's content
    this.renderer.setProperty(this.el.nativeElement, 'textContent', '');

    // Call the typewriting function
    const formattedText = this.formatArbitraryCode(text)
    console.log("Formatted Text :  ",formattedText)
    this.typeWriter(formattedText, 100);
  }

  typeWriter(text: string, delay: number): void {
    console.log(text);
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        this.renderer.setProperty(
          this.el.nativeElement,
          'textContent',
          text.substring(0, index + 1)
        );
        index++;
      } else {
        clearInterval(timer);
      }
    }, delay);
  }
}
