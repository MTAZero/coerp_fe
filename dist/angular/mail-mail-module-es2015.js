(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-mail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mail/mail-inbox/mail-inbox.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mail/mail-inbox/mail-inbox.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-page-title\n    title=\"Văn thư đến\"\n    [breadcrumbItems]=\"breadCrumbItems\"\n  ></app-page-title>\n\n  <div class=\"row\">\n    <!-- Right Sidebar -->\n    <div class=\"col-12\">\n      <div class=\"card-box\">\n        <!-- Left sidebar -->\n        <div class=\"inbox-leftbar\">\n          <a\n            routerLink=\"/email/compose\"\n            class=\"btn btn-danger btn-block waves-effect waves-light mb-4\"\n            >Compose</a\n          >\n\n          <app-emaillist></app-emaillist>\n          <!--Leftbar email label and list-->\n        </div>\n        <!--End Left sidebar -->\n\n        <!--Right Sidebar-->\n        <div class=\"inbox-rightbar\">\n          <app-widget></app-widget>\n          <!--Button Group-->\n          <div class=\"mt-3\">\n            <ul class=\"message-list\">\n              <li\n                class=\"unread\"\n                *ngFor=\"let email of emailData | slice: 0:15; let i = index\"\n                [ngClass]=\"{ unread: email.unread === true }\"\n              >\n                <div class=\"col-mail col-mail-1\">\n                  <div class=\"checkbox-wrapper-mail\">\n                    <input type=\"checkbox\" id=\"chk-{{ i }}\" />\n                    <label for=\"chk-{{ i }}\"></label>\n                  </div>\n                  <span\n                    class=\"star-toggle far fa-star text-{{ email.text }}\"\n                  ></span>\n                  <a href=\"\" class=\"title\">{{ email.title }}</a>\n                </div>\n                <div class=\"col-mail col-mail-2\">\n                  <a href=\"\" class=\"subject\">{{ email.subject }} </a>\n                  <div class=\"date\">{{ email.date | date: 'MMM d' }}</div>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <div class=\"row justify-content-md-between align-items-md-center\">\n            <div class=\"col-7\">\n              Showing {{ startIndex }} - {{ endIndex }} of {{ totalRecords }}\n            </div>\n            <!-- end col-->\n            <div class=\"col-5\">\n              <div class=\"text-md-right float-md-right mt-2\">\n                <ngb-pagination\n                  [collectionSize]=\"totalRecords\"\n                  (pageChange)=\"onPageChange($event)\"\n                  [(page)]=\"page\"\n                  [pageSize]=\"pageSize\"\n                >\n                </ngb-pagination>\n                <!--Pagination-->\n              </div>\n            </div>\n            <!-- end col-->\n          </div>\n        </div>\n        <!--End Right Sidebar-->\n        <div class=\"clearfix\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/mail/mail-inbox/data.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/mail/mail-inbox/data.ts ***!
  \***********************************************/
/*! exports provided: emailData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailData", function() { return emailData; });
const emailData = [
    {
        unread: true,
        text: 'warning',
        title: 'Lucas Kriebel (via Twitter)',
        // tslint:disable-next-line: max-line-length
        subject: 'Lucas Kriebel (@LucasKriebel) has sent you a direct message on Twitter! @LucasKriebel - Very cool :) Nicklas, You have a new direct message.',
        date: '10-Jan-2019'
    },
    {
        title: 'Randy, me (5)',
        // tslint:disable-next-line: max-line-length
        subject: "Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!",
        date: '01-Feb-2019'
    },
    {
        title: 'Bruen-McCullough',
        // tslint:disable-next-line: max-line-length
        subject: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        date: '28-Apr-2019'
    },
    {
        text: 'warning',
        title: 'Muller LLC',
        subject: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        date: '08-Jan-2019'
    },
    {
        title: 'Haley and Sons',
        // tslint:disable-next-line: max-line-length
        subject: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        date: '16-Nov-2018'
    },
    {
        unread: true,
        title: 'Kohler-Effertz',
        // tslint:disable-next-line: max-line-length
        subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        date: '05-Oct-2018'
    },
    {
        text: 'warning',
        title: 'Stokes, Fay and Pfeffer',
        // tslint:disable-next-line: max-line-length
        subject: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        date: '16-Apr-2019'
    },
    {
        text: 'warning',
        title: "Hintz-O'Reilly",
        // tslint:disable-next-line: max-line-length
        subject: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        date: '30-Dec-2018'
    },
    {
        title: 'Franecki, Simonis and Dach',
        subject: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        date: '20-Feb-2019'
    },
    {
        unread: true,
        text: 'warning',
        title: 'Keeling-Bergstrom',
        // tslint:disable-next-line: max-line-length
        subject: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        date: '26-Jan-2019'
    },
    {
        title: 'Waters, Jacobs and Ortiz',
        // tslint:disable-next-line: max-line-length
        subject: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        date: '09-Dec-2018'
    },
    {
        text: 'warning',
        title: 'Ernser, Bernier and Schaden',
        // tslint:disable-next-line: max-line-length
        subject: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        date: '29-Apr-2019'
    },
    {
        title: 'Davis, Pouros and Welch',
        // tslint:disable-next-line: max-line-length
        subject: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        date: '12-Jun-2019'
    },
    {
        title: "O'Keefe Group'",
        // tslint:disable-next-line: max-line-length
        subject: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
        date: '01-Mar-2019'
    },
    {
        text: 'warning',
        title: 'Batz, Abbott and Jakubowski',
        // tslint:disable-next-line: max-line-length
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        date: '12-Oct-2018'
    },
    {
        unread: true,
        title: 'Mertz and Sons',
        subject: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        date: '09-May-2019'
    },
    {
        title: 'Thompson Group',
        // tslint:disable-next-line: max-line-length
        subject: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        date: '26-Dec-2018'
    },
    {
        title: 'Jerde, Okuneva and Klocko',
        // tslint:disable-next-line: max-line-length
        subject: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        date: '02-Feb-2019'
    },
    {
        text: 'warning',
        title: 'Boyer-Lubowitz',
        subject: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        date: '13-Nov-2018'
    },
    {
        title: 'Gutmann, McLaughlin and Nienow',
        // tslint:disable-next-line: max-line-length
        subject: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        date: '25-Jul-2018'
    },
    {
        text: 'warning',
        title: 'Lebsack-Schmitt',
        // tslint:disable-next-line: max-line-length
        subject: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '30-Sep-2018'
    },
    {
        unread: true,
        title: 'Jacobi-Greenholt',
        // tslint:disable-next-line: max-line-length
        subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        date: '16-May-2019'
    },
    {
        title: 'Kutch, Jacobson and Kozey',
        // tslint:disable-next-line: max-line-length
        subject: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        date: '06-Apr-2019'
    },
    {
        text: 'warning',
        title: 'Bernhard and Sons',
        // tslint:disable-next-line: max-line-length
        subject: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        date: '09-Feb-2019'
    },
    {
        title: 'Kunze Inc',
        text: 'warning',
        // tslint:disable-next-line: max-line-length
        subject: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        date: '11-May-2019'
    },
    {
        title: 'Miller Group',
        subject: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        date: '19-Jul-2018'
    },
    {
        title: 'Durgan and Sons',
        // tslint:disable-next-line: max-line-length
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        date: '23-Dec-2018'
    },
    {
        text: 'warning',
        title: 'Pfannerstill-Kautzer',
        // tslint:disable-next-line: max-line-length
        subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        date: '20-Jan-2019'
    },
    {
        title: "O'Reilly-Ferry",
        subject: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        date: '29-Apr-2019'
    },
    {
        title: 'Shields, Jast and Towne',
        // tslint:disable-next-line: max-line-length
        subject: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        date: '16-Feb-2019'
    },
    {
        text: 'warning',
        title: 'Mayert-Dickinson',
        // tslint:disable-next-line: max-line-length
        subject: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '30-Dec-2018'
    },
    {
        title: 'Little LLC',
        // tslint:disable-next-line: max-line-length
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        date: '07-Mar-2019'
    },
    {
        text: 'warning',
        title: 'Crist, Blanda and Wuckert',
        subject: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        date: '13-Aug-2018'
    },
    {
        text: 'warning',
        title: 'Williamson-Sanford',
        subject: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        date: '09-Jul-2019'
    },
    {
        title: 'Gleason-Shanahan',
        // tslint:disable-next-line: max-line-length
        subject: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        date: '13-May-2019'
    },
    {
        unread: true,
        title: 'Franecki-Hodkiewicz',
        // tslint:disable-next-line: max-line-length
        subject: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        date: '15-Mar-2019'
    },
    {
        title: 'Bailey-Simonis',
        subject: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        date: '18-Sep-2018'
    },
    {
        text: 'warning',
        title: 'Grant-Volkman',
        // tslint:disable-next-line: max-line-length
        subject: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        date: '13-Mar-2019'
    },
    {
        title: 'Kshlerin-Cole',
        // tslint:disable-next-line: max-line-length
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '21-Nov-2018'
    },
    {
        title: 'Pouros-Funk',
        // tslint:disable-next-line: max-line-length
        subject: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        date: '05-Jun-2019'
    },
    {
        title: 'Ziemann-Denesik',
        subject: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        date: '14-Apr-2019'
    },
    {
        title: 'Johnson LLC',
        // tslint:disable-next-line: max-line-length
        subject: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        date: '30-Nov-2018'
    },
    {
        title: 'Cummings-Ferry',
        // tslint:disable-next-line: max-line-length
        subject: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        date: '30-Nov-2018'
    },
    {
        title: 'Weimann-Lueilwitz',
        // tslint:disable-next-line: max-line-length
        subject: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        date: '06-Nov-2018'
    },
    {
        unread: true,
        title: 'Zieme, Krajcik and Champlin',
        // tslint:disable-next-line: max-line-length
        subject: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        date: '28-Mar-2019'
    },
    {
        title: 'Toy-Kunde',
        // tslint:disable-next-line: max-line-length
        subject: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        date: '27-Dec-2018'
    },
    {
        title: 'Mosciski and Sons',
        subject: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        date: '04-Feb-2019'
    },
    {
        title: 'Lowe, Windler and Wolff',
        // tslint:disable-next-line: max-line-length
        subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        date: '13-Mar-2019'
    },
    {
        text: 'warning',
        title: 'Bruen-Bashirian',
        // tslint:disable-next-line: max-line-length
        subject: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
        date: '04-Mar-2019'
    },
    {
        title: 'Nader, Hickle and Ullrich',
        // tslint:disable-next-line: max-line-length
        subject: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        date: '28-May-2019'
    },
    {
        text: 'warning',
        title: 'Reilly-Homenick',
        // tslint:disable-next-line: max-line-length
        subject: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        date: '18-Jan-2019'
    },
    {
        unread: true,
        title: "O'Connell and Sons",
        // tslint:disable-next-line: max-line-length
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        date: '03-Aug-2018'
    }
];



/***/ }),

/***/ "./src/app/pages/mail/mail-inbox/mail-inbox.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/mail/mail-inbox/mail-inbox.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haWwvbWFpbC1pbmJveC9tYWlsLWluYm94LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/mail/mail-inbox/mail-inbox.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/mail/mail-inbox/mail-inbox.component.ts ***!
  \***************************************************************/
/*! exports provided: MailInboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailInboxComponent", function() { return MailInboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/pages/mail/mail-inbox/data.ts");



let MailInboxComponent = class MailInboxComponent {
    constructor() {
        // page number
        this.page = 1;
        // default page size
        this.pageSize = 15;
        // total number of records
        this.totalRecords = 0;
        // start and end index
        this.startIndex = 1;
        this.endIndex = 15;
    }
    ngOnInit() {
        this.breadCrumbItems = [
            { label: 'ERP', path: '/' },
            { label: 'Văn thư', path: '/' },
            { label: 'Văn thư đến', path: '/', active: true }
        ];
        // gets the data
        this._fetchData();
    }
    /**
     * Handle on page click event
     */
    onPageChange(page) {
        this.startIndex = (page - 1) * this.pageSize + 1;
        this.endIndex = (page - 1) * this.pageSize + this.pageSize;
        if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
        }
        this.emailData = _data__WEBPACK_IMPORTED_MODULE_2__["emailData"].slice(this.startIndex - 1, this.endIndex - 1);
    }
    /**
     * Gets the email data
     * Note: In real application - you might want to call some api to get the email records
     */
    _fetchData() {
        this.emailData = _data__WEBPACK_IMPORTED_MODULE_2__["emailData"];
        this.totalRecords = _data__WEBPACK_IMPORTED_MODULE_2__["emailData"].length;
    }
};
MailInboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mail-inbox',
        template: __webpack_require__(/*! raw-loader!./mail-inbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mail/mail-inbox/mail-inbox.component.html"),
        styles: [__webpack_require__(/*! ./mail-inbox.component.scss */ "./src/app/pages/mail/mail-inbox/mail-inbox.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MailInboxComponent);



/***/ }),

/***/ "./src/app/pages/mail/mail-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/mail/mail-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailRoutingModule", function() { return MailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail-inbox/mail-inbox.component */ "./src/app/pages/mail/mail-inbox/mail-inbox.component.ts");




const routes = [
    {
        path: 'mail-inbox',
        component: _mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_3__["MailInboxComponent"]
    }
];
let MailRoutingModule = class MailRoutingModule {
};
MailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MailRoutingModule);



/***/ }),

/***/ "./src/app/pages/mail/mail.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/mail/mail.module.ts ***!
  \*******************************************/
/*! exports provided: MailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailModule", function() { return MailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var _mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mail-inbox/mail-inbox.component */ "./src/app/pages/mail/mail-inbox/mail-inbox.component.ts");
/* harmony import */ var _mail_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mail-routing.module */ "./src/app/pages/mail/mail-routing.module.ts");








let MailModule = class MailModule {
};
MailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mail_inbox_mail_inbox_component__WEBPACK_IMPORTED_MODULE_6__["MailInboxComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _mail_routing_module__WEBPACK_IMPORTED_MODULE_7__["MailRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapseModule"],
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UIModule"],
            ngx_editor__WEBPACK_IMPORTED_MODULE_4__["NgxEditorModule"]
        ]
    })
], MailModule);



/***/ })

}]);
//# sourceMappingURL=mail-mail-module-es2015.js.map