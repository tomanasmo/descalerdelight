import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { WINDOW } from '../../m0-core/window.service';
import { AnasmoGlobals } from 'src/anasmo/global';
import { fromEvent, map, Observable, of, startWith, tap } from 'rxjs';
import { M6StickyBarService } from './m6-sticky-bar.service';

@Component({
  selector: 'app-m6-sticky-bar2',
  /*templateUrl: './m6-sticky-bar.component.html',
  styleUrls: ['./m6-sticky-bar.component.css'],*/
  template: `
    <!--<nav id="main" #menu [ngClass]="{ 'fixed-nav': shouldStick$ | async }">
      <ul>
        <li class="logo"><a href="#">LOST.</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Images</a></li>
        <li><a href="#">Locations</a></li>
        <li><a href="#">Maps</a></li>
      </ul>
    </nav>-->

    <div class="wrapper" #menu [ngClass]="{ 'sticky': shouldStick$ | async }">  
      <div class="outer-grid">
        <div class="grid" [ngClass]="{'is-medium': isMedium, 'is-small': isSmall}">

          <div class="item1" [ngClass]="{'is-medium': isMedium, 'is-small': isSmall}">
          <img src="./assets/img/logo-white.svg" />
          </div>

          <div class="item2" *ngIf="isBig">
            <mat-icon>star star star star star_half</mat-icon>
          </div>

          <div class="item3" [ngClass]="{'is-medium': isMedium, 'is-small': isSmall}">
            <a class="order-now2" routerLink="/bestill" routerLinkActive="active" ariaCurrentWhenActive="page">FÅ -{{ discountPercent}}% I RABATT</a>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: [`
    /*:host {
      display: block;
    }*/

    .sticky {
      position: fixed;
      top: 0;
      width: 100%;
    }

    /*header {
      text-align: center;
      height: 50vh;
      background: url(https://source.unsplash.com/GKN6rpDr0EI/960x640) bottom center no-repeat;
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h1 {
      color: white;
      font-size: 7vw;
      text-shadow: 3px 4px 0 rgba(0,0,0,0.2);
    }*/

    nav {
      background: black;
      top: 0;
      width: 100%;
      transition:all 0.5s;
      position: relative;
      z-index: 1;
    }

    nav.fixed-nav {
      position: fixed;
      box-shadow: 0 5px 0 rgba(0,0,0,0.1);
    }

    nav ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }
      
    nav li {
      flex: 1;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    li.logo {
      max-width: 0;
      overflow: hidden;
      background: white;
      transition: all 0.5s;
      font-weight: 600;
      font-size: 30px;
    }
      
    li.logo a {
      color: black;
    }
      
    .fixed-nav li.logo {
      max-width: 500px;
    }

    nav a {
      text-decoration: none;
      padding: 20px;
      display: inline-block;
      color: white;
      transition: all 0.2s;
      text-transform: uppercase;
    }

    /* Outer grid */

.outer-grid {
  display: grid;
  grid-template-columns: minmax(0, 950px); /* 100% up to max (use min=0, not 100%). */
  justify-content: center;  
  /*padding: 1em 2em;*/
}

/* Grid. */

.grid {
  display: grid;
  grid-template-columns: 35% 30% 35%; /*0.35fr 0.3fr 0.35fr;*//*1fr 1fr 1fr;*/
  justify-items: center;
  align-items: center;  
}

.grid.is-medium, .grid.is-small {
  display: grid;
  grid-template-columns: none;
  grid-template-rows: 1fr;
  gap: 10px;
}

/* General. */

a:hover {
  cursor: pointer;
}

a {
  text-decoration: none;
}

.item1 {
  justify-self: left;
}

.item2 {
  color: orange;
}

.item3 {
  justify-self: right;
}

.item1.is-medium, .item3.is-medium, .item1.is-small, .item3.is-small {
  justify-self: center;
}

.item1.is-medium img, .item1.is-small img {
  display: block;
  margin: 0 auto;
}

mat-icon {
  font-size: 2em;
  display: block;
  height: 100%;
  width: 100%;
}

.order-now2 {
  background-color: rgb(14, 209, 61);
  padding: 10px 25px;
  color: white;
  font-weight: bolder;
  display: block;
  margin: 0 auto;
  width: fit-content;
  border-radius: 5px;
}

.wrapper {
  padding: 1em 2em;
  /*background-color: black;*/
  background-color: black;
  color: white;
}

img {
  display: block;
  width: 70%;
}

.grid.fixed-nav {
  display: block;
  position: fixed;
  background-color: yellow;
  /*box-shadow: 0 5px 0 rgba(0,0,0,0.1);*/
}

/*
Måten brukt her:
  https://medium.com/@chiodigiovanni1/a-simple-on-scroll-sticky-menu-with-angular-and-bulma-66fafc7fc7b9
  
Annen kul måte:
  https://dev.to/railsstudent/sticky-navigation-bar-after-scroll-using-rxjs-and-angular-4jjh
  https://railsstudent.github.io/ng-rxjs-30/day24-sticky-nav/
*/
/*.sticky {
  position: fixed;
  top: 0;
  overflow: hidden;
  z-index: 10;  
}*/

  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class M6StickyBarComponent2 implements OnInit {

  isMedium = false;
  isSmall = false;
  isBig = false;    
  smallScreenBreakpoints = "(max-width: 549.98px)";
  mediumScreenBreakpoints = "(min-width: 550px) and (max-width: 749.98px)";

  discountPercent = AnasmoGlobals.DISCOUNT_PERCENT;

  @ViewChild('menu', { static: true, read: ElementRef })
  nav!: ElementRef<HTMLElement>;
  //shouldStick$!: Observable<boolean>;
  shouldStick$ = this.service.shouldStick$;

  test = false;
  testY = 0;

  constructor(private responsive: BreakpointObserver, @Inject(WINDOW) private window: Window, private service: M6StickyBarService) {}
  
  ngOnInit() {
    
    const navNative = this.nav.nativeElement;
    const body = navNative.closest('body');
    this.shouldStick$ = fromEvent(this.window, 'scroll')
    .pipe(
      map(() => this.window.scrollY > navNative.offsetTop),
      tap((result) => {

        if (result != this.test) {
         this.testY = this.window.scrollY;
         this.test = result;
        }        

        if (body) {
          /*console.log("TAP: " + result + " KOORD: " + this.window.scrollY + "    " + navNative.offsetHeight);*/
          console.log(this.testY + "  " + this.window.scrollY);
          body.style.paddingTop = result ? `${navNative.offsetHeight}px` : '0';

          if (this.window.scrollY < this.testY) {
            body.style.paddingTop = `${navNative.offsetHeight}px`;
            console.log("STOPP");
          }
        }            
        this.service.addClass(result);
      }),
      startWith(false)
    );

    console.log("HAAAAAA" + this.shouldStick$);

    // https://material.angular.io/cdk/layout/overview
    this.responsive.observe(      
      this.smallScreenBreakpoints + ", " + this.mediumScreenBreakpoints
      ).subscribe(result => {

        if (this.responsive.isMatched(this.mediumScreenBreakpoints)) {
          console.log("MEDIUM");   
          this.isMedium = true;
          this.isSmall = false;
          this.isBig = false;
        } else if (this.responsive.isMatched(this.smallScreenBreakpoints)) {
          console.log("SMALL");
          this.isSmall = true;
          this.isMedium = false;
          this.isBig = false;         
        } else {
          console.log("BIG");
          this.isMedium = false;
          this.isSmall = false;
          this.isBig = true;
        }

    });
  }
}