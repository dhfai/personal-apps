declare module 'jquery-scrollify' {
    import * as JQuery from 'jquery';
  
    interface ScrollifyOptions {
      section?: string;
      sectionName?: string;
      interstitialSection?: string;
      easing?: string;
      scrollSpeed?: number;
      offset?: number;
      scrollbars?: boolean;
      standardScrollElements?: string;
      setHeights?: boolean;
      overflowScroll?: boolean;
      updateHash?: boolean;
      touchScroll?: boolean;
      before?: (index: number, sections: HTMLElement[]) => void;
      after?: (index: number, sections: HTMLElement[]) => void;
      afterResize?: () => void;
      afterRender?: () => void;
    }
  
    interface JQueryStatic {
      scrollify: {
        (options?: ScrollifyOptions): void;
        move: (sectionName: string) => void;
        instantMove: (sectionName: string) => void;
        next: () => void;
        previous: () => void;
        destroy: () => void;
        disable: () => void;
        enable: ()=> void;
        isDisabled: () => boolean;
      };
    }
  
    export = JQuery;
  }
  