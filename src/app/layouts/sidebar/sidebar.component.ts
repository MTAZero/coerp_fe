import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
  OnChanges
} from '@angular/core';
import MetisMenu from 'metismenujs/dist/metismenujs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() isCondensed = false;

  menu: any;

  @ViewChild('sideMenu', { static: false }) sideMenu: ElementRef;

  constructor() {}

  ngOnInit() {
    this.lightTopbar();
  }

  ngAfterViewInit() {
    this.menu = new MetisMenu(this.sideMenu.nativeElement);

    this._activateMenuDropdown();
  }

  ngOnChanges() {
    if ((!this.isCondensed && this.sideMenu) || this.isCondensed) {
      setTimeout(() => {
        this.menu = new MetisMenu(this.sideMenu.nativeElement);
      });
    } else if (this.menu) {
      this.menu.dispose();
    }
  }

  /**
   * On menu click
   */
  onMenuClick(event: any) {
    var currentEl = null;
    if (event.target.classList.contains('waves-effect')) {
      currentEl = event.target;
    } else {
      currentEl = event.target.parentNode;
    }
    console.log(currentEl);

    const parentEl = currentEl.parentNode;
    console.log(parentEl, parentEl.children[1]);
    if (parentEl.classList.contains('active')) {
      parentEl.classList.remove('active');
      parentEl.children[1].classList.remove('in');
      parentEl.children[1].classList.remove('mm-collapsing');
      parentEl.children[1].classList.remove('collapsing');
    } else {
      console.log(parentEl.classList[1].classList);
      parentEl.classList.add('active');
      parentEl.children[1].classList.add('in');
      parentEl.children[1].classList.remove('mm-collapsing');
      parentEl.children[1].classList.remove('collapsing');
      parentEl.children[1].style = '';
    }
  }

  /**
   * small sidebar
   */
  smallSidebar() {
    document.body.classList.add('left-side-menu-sm');
    document.body.classList.remove('left-side-menu-dark');
    document.body.classList.remove('topbar-light');
    document.body.classList.remove('boxed-layout');
    document.body.classList.remove('enlarged');
  }

  /**
   * Dark sidebar
   */
  darkSidebar() {
    document.body.classList.remove('left-side-menu-sm');
    document.body.classList.add('left-side-menu-dark');
    document.body.classList.remove('topbar-light');
    document.body.classList.remove('boxed-layout');
  }

  /**
   * Light Topbar
   */
  lightTopbar() {
    document.body.classList.add('topbar-light');
    document.body.classList.remove('left-side-menu-dark');
    document.body.classList.remove('left-side-menu-sm');
    document.body.classList.remove('boxed-layout');
  }

  /**
   * Sidebar collapsed
   */
  sidebarCollapsed() {
    document.body.classList.remove('left-side-menu-dark');
    document.body.classList.remove('left-side-menu-sm');
    document.body.classList.toggle('enlarged');
    document.body.classList.remove('boxed-layout');
    document.body.classList.remove('topbar-light');
  }

  /**
   * Boxed Layout
   */
  boxedLayout() {
    document.body.classList.add('boxed-layout');
    document.body.classList.remove('left-side-menu-dark');
    document.body.classList.add('enlarged');
    document.body.classList.remove('left-side-menu-sm');
  }

  /**
   * Activates the menu dropdown
   */
  _activateMenuDropdown() {
    const links = document.getElementsByClassName('side-nav-link-ref');
    let menuItemEl = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // tslint:disable-next-line: no-string-literal
      if (window.location.pathname === links[i]['pathname']) {
        menuItemEl = links[i];
        break;
      }
    }

    if (menuItemEl) {
      menuItemEl.classList.add('active');

      const parentEl = menuItemEl.parentElement;
      if (parentEl) {
        parentEl.classList.add('active');

        const parent2El = parentEl.parentElement;
        if (parent2El) {
          parent2El.classList.add('in');
        }

        const parent3El = parent2El.parentElement;
        if (parent3El) {
          parent3El.classList.add('active');
          parent3El.firstChild.classList.add('active');
        }
      }
    }
  }
}
