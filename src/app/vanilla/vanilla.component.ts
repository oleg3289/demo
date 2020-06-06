import { Component, ChangeDetectionStrategy, ViewEncapsulation, OnInit, Inject, PLATFORM_ID, ElementRef, Renderer2 } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-vanilla',
    templateUrl: 'vanilla.template.html',
    // styleUrls: ['vanilla.style.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class VanillaComponent implements OnInit {
    private isBrowser: boolean = false;
    private rotateFinishSub = new Subject();
    private delayFinishSub = new Subject();
    private infoAuth: ElementRef;
    private infoSongName: ElementRef;

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private elementRef: ElementRef,
        private renderer: Renderer2
    ) { 
        this.isBrowser = isPlatformBrowser(this.platformId)
    }

    ngOnInit() {
        if (this.isBrowser) {
            this.setAnimeRotate()
        }   

        this.rotateFinishSub.subscribe(() => {
            this.infoAuth = this.elementRef.nativeElement.querySelector('.info_auth');
            this.infoSongName = this.elementRef.nativeElement.querySelector('.info_song-name');

            this.renderer.addClass(this.infoAuth, 'flash-anime');
            this.renderer.addClass(this.infoSongName, 'flash-anime');
            
            setTimeout(() => {
                this.delayFinishSub.next();
            }, 2350);
        })

        this.delayFinishSub.subscribe(() => {
            this.renderer.addClass(this.infoAuth, 'isvisible');
            this.renderer.addClass(this.infoSongName, 'isvisible');
        })
    }

    private setAnimeRotate(): void {
        const vanil = this.elementRef.nativeElement.querySelector('.disc-vanilla');
        this.renderer.addClass(vanil, 'slice-anime');
        setTimeout(()=>{
            this.rotateFinishSub.next()
        }, 1550)
    }
}