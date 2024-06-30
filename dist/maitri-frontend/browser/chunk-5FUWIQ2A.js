import { b as me } from "./chunk-NV5RY5EA.js";
import { a as ce, b as de } from "./chunk-HUFV74GP.js";
import { a as pe } from "./chunk-EMNOPXZV.js";
import { a as M, b as ue } from "./chunk-ORQGXZDR.js";
import "./chunk-6YLTLXMX.js";
import { a as se } from "./chunk-EO67VZ56.js";
import "./chunk-LFVSKKQO.js";
import "./chunk-SXFKYE6F.js";
import "./chunk-XVPSVN7Z.js";
import { b as ae, c as le } from "./chunk-GG4KKEGR.js";
import "./chunk-L7KF6TMI.js";
import "./chunk-UMSWC4GJ.js";
import { e as V, f as T, i as re } from "./chunk-FEXZKP3R.js";
import { a as ne } from "./chunk-35SNKNNU.js";
import "./chunk-3AFYCWEY.js";
import "./chunk-7B4WEPGY.js";
import { d as W } from "./chunk-ONIKTDMA.js";
import {
  B as te,
  C as ie,
  D as oe,
  c as $,
  e as C,
  g as J,
  h as K,
  l as Q,
  p as X,
  s as Y,
  y as ee,
} from "./chunk-IWUKBY46.js";
import "./chunk-7ZKIOEOA.js";
import "./chunk-Y5BMXVS7.js";
import {
  Db as x,
  Dc as P,
  Ea as d,
  Fa as p,
  Fb as m,
  Ga as _,
  Ha as k,
  Pb as i,
  Qb as l,
  Rb as g,
  Sb as H,
  Tb as A,
  Vb as h,
  Yb as f,
  _b as c,
  cc as B,
  fd as Z,
  gd as O,
  ha as y,
  hc as E,
  ic as s,
  jc as q,
  lb as u,
  ma as z,
  mb as b,
  oc as D,
  pc as F,
  pd as U,
  qc as j,
  rc as R,
  sc as G,
  ta as L,
} from "./chunk-PWWHKO4X.js";
import { a as I, b as N } from "./chunk-4LMIJWLY.js";
var fe = (() => {
  let o = class o {
    constructor(t) {
      this.snackBar = t;
    }
    showErrorNotification(t, e = "Close") {
      this.snackBar.open(t, e, {
        duration: 3e3,
        horizontalPosition: "end",
        verticalPosition: "top",
        panelClass: ["error-snackbar"],
      });
    }
  };
  (o.ɵfac = function (e) {
    return new (e || o)(z(M));
  }),
    (o.ɵprov = y({ token: o, factory: o.ɵfac, providedIn: "root" }));
  let r = o;
  return r;
})();
var be = (() => {
  let o = class o {
    constructor(t) {
      this.snackBar = t;
    }
    showSuccessNotification(t, e = "Close") {
      this.snackBar.open(t, e, {
        horizontalPosition: "end",
        verticalPosition: "top",
        duration: 3e3,
        panelClass: ["success-notification"],
      });
    }
  };
  (o.ɵfac = function (e) {
    return new (e || o)(z(M));
  }),
    (o.ɵprov = y({ token: o, factory: o.ɵfac, providedIn: "root" }));
  let r = o;
  return r;
})();
function we(r, o) {
  r & 1 &&
    (i(0, "span"),
    _(),
    i(1, "svg", 23),
    g(2, "circle", 24)(3, "path", 25),
    l()());
}
function ke(r, o) {
  if (r & 1) {
    let a = h();
    i(0, "tr", 15),
      g(1, "td"),
      i(2, "td", 16),
      g(3, "input", 17),
      l(),
      i(4, "td", 16),
      g(5, "input", 18),
      l(),
      i(6, "td", 19)(7, "button", 20),
      f("click", function () {
        d(a);
        let e = c();
        return p(e.addSpecialization());
      }),
      s(8, " Add Specialization "),
      x(9, we, 4, 0, "span", 21),
      l(),
      i(10, "button", 22),
      f("click", function () {
        d(a);
        let e = c();
        return p((e.addingSpecialization = !e.addingSpecialization));
      }),
      s(11, " Cancel "),
      l()()();
  }
  if (r & 2) {
    let a = c();
    m("formGroup", a.specializationForm), u(9), m("ngIf", a.isAdding);
  }
}
function Ce(r, o) {
  if (r & 1) {
    let a = h();
    i(0, "button", 36),
      f("click", function () {
        d(a);
        let e = c().index,
          n = c();
        return p(n.toggleEdit(e));
      }),
      _(),
      i(1, "svg", 37),
      g(2, "path", 38),
      l(),
      k(),
      i(3, "span"),
      s(4, "Edit"),
      l()();
  }
}
function ve(r, o) {
  if (r & 1) {
    let a = h();
    i(0, "button", 39),
      f("click", function () {
        d(a);
        let e = c().$implicit,
          n = c();
        return p(n.submitForm(e));
      }),
      _(),
      i(1, "svg", 37),
      g(2, "path", 40),
      l(),
      k(),
      i(3, "span"),
      s(4, "Submit"),
      l()();
  }
}
function ye(r, o) {
  if (r & 1) {
    let a = h();
    i(0, "button", 41),
      f("click", function () {
        d(a);
        let e = c().$implicit,
          n = c();
        return p(n.changeStatus(e._id, e.isBlocked));
      }),
      _(),
      i(1, "svg", 42),
      g(2, "path", 43),
      l(),
      k(),
      i(3, "span"),
      s(4, "Unblock"),
      l()();
  }
}
function ze(r, o) {
  if (r & 1) {
    let a = h();
    i(0, "button", 44),
      f("click", function () {
        d(a);
        let e = c().$implicit,
          n = c();
        return p(n.changeStatus(e._id, e.isBlocked));
      }),
      _(),
      i(1, "svg", 42),
      g(2, "path", 43),
      l(),
      k(),
      i(3, "span"),
      s(4, "Block"),
      l()();
  }
}
function Ee(r, o) {
  if (r & 1) {
    let a = h();
    i(0, "tr", 26)(1, "td", 16)(2, "p", 27),
      s(3),
      l()(),
      i(4, "td", 16)(5, "input", 28),
      j("ngModelChange", function (e) {
        let n = d(a).$implicit;
        return F(n.name, e) || (n.name = e), p(e);
      }),
      l()(),
      i(6, "td", 16)(7, "input", 29),
      j("ngModelChange", function (e) {
        let n = d(a).$implicit;
        return F(n.description, e) || (n.description = e), p(e);
      }),
      l()(),
      i(8, "td", 30),
      x(9, Ce, 5, 0, "button", 31),
      i(10, "button", 32),
      g(11, "i", 33),
      s(12, " View Doctors "),
      l(),
      x(13, ve, 5, 0, "button", 34)(14, ye, 5, 0, "button", 35)(
        15,
        ze,
        5,
        0,
        "ng-template",
        null,
        1,
        P
      ),
      l()();
  }
  if (r & 2) {
    let a = o.$implicit,
      t = o.index,
      e = E(16),
      n = c();
    u(3),
      q(t + 1),
      u(2),
      B("id", "name", t, ""),
      D("ngModel", a.name),
      m("value", a.name)("disabled", !a.isEditing),
      u(2),
      B("id", "description", t, ""),
      D("ngModel", a.description),
      m("value", a.description)("disabled", !a.isEditing),
      u(2),
      m("ngIf", !a.isEditing && !n.isSubmitting),
      u(),
      m("routerLink", "/admin/specialized-doctors/" + a._id),
      u(3),
      m("ngIf", a.isEditing),
      u(),
      m("ngIf", a.isBlocked)("ngIfElse", e);
  }
}
var Oe = (() => {
  let o = class o {
    constructor(t, e, n, S, v, w, he) {
      (this.formBuilder = t),
        (this.confirmationService = e),
        (this.messageService = n),
        (this.specializationService = S),
        (this.toastrService = v),
        (this.toastSuccessService = w),
        (this.toastr = he),
        (this.specializations = []),
        (this.isLoading = !0),
        (this.toggledRowIndex = -1),
        (this.isSubmitting = !1),
        (this.position = "center"),
        (this.addingSpecialization = !1),
        (this.isAdding = !1);
    }
    ngOnInit() {
      this.loadDoctorCategories(),
        (this.specializationForm = this.formBuilder.group({
          name: ["", [C.required, C.minLength(4)]],
          description: ["", [C.required, C.minLength(4)]],
        }));
    }
    loadDoctorCategories() {
      this.specializationService.getAllDoctorCategories().subscribe((t) => {
        console.log(t),
          (this.isLoading = !1),
          (this.specializations = t.data),
          this.specializations.forEach((e) => (e.isEditing = !1));
      });
    }
    toggleEdit(t) {
      this.toggledRowIndex !== -1 &&
        this.toggledRowIndex !== t &&
        (this.specializations[this.toggledRowIndex].isEditing = !1),
        (this.specializations[t].isEditing =
          !this.specializations[t].isEditing),
        (this.toggledRowIndex = this.specializations[t].isEditing ? t : -1);
    }
    submitForm(t) {
      if ((console.log(t), !this.isValidSpecialization(t))) {
        this.toastr.error("Form is invalid");
        return;
      }
      (this.isSubmitting = !0),
        console.log("Submitting form", t),
        this.specializationService
          .updateDoctorCategory(t._id, t)
          .subscribe((e) => {
            console.log(e.data),
              (this.isSubmitting = !1),
              this.mapNewData(e.data);
          });
    }
    isValidSpecialization(t) {
      return t.name.trim().length > 3 && t.description.trim().length > 4;
    }
    mapNewData(t) {
      console.log("Received specialization:", t);
      let e = this.specializations.findIndex((n) => n._id === t._id);
      console.log("Index:", e),
        e !== -1
          ? ((this.specializations[e] = N(I({}, t), { isEditing: !1 })),
            console.log("Updated specialization:", this.specializations[e]))
          : (this.specializations.push(N(I({}, t), { isEditing: !1 })),
            console.log("not index", this.specializations));
    }
    changeStatus(t, e) {
      let n = e ? "Unblock" : "Block";
      this.confirmationService.confirm({
        message: `Are you sure you want to ${n} the User?`,
        header: "Confirmation",
        icon: "pi pi-info-circle",
        acceptIcon: "none",
        rejectIcon: "none",
        rejectButtonStyleClass: "p-button-text",
        accept: () => {
          this.messageService.add({
            severity: "info",
            summary: "Confirmed",
            detail: "Request submitted",
          }),
            this.blockOrUnblock(t);
        },
        reject: () => {
          this.messageService.add({
            severity: "error",
            summary: "Rejected",
            detail: "Process incomplete",
            life: 3e3,
          });
        },
        key: "positionDialog",
      });
    }
    blockOrUnblock(t) {
      console.log("Submitting form", t),
        this.specializationService.changeStatusOfCategory(t).subscribe((e) => {
          console.log(e.data),
            (this.isSubmitting = !1),
            this.mapNewData(e.data);
        });
    }
    addSpecialization() {
      console.log(this.specializationForm);
      let t = this.specializationForm.get("name"),
        e = this.specializationForm.get("description");
      if (!(!t || !e)) {
        if (t.invalid && t.dirty) {
          t?.errors?.required
            ? this.toastrService.showErrorNotification(
                "Name is required.",
                "Close"
              )
            : t?.errors?.minlength &&
              this.toastrService.showErrorNotification(
                "Name must be at least 4 characters long.",
                "Close"
              );
          return;
        }
        if (e.invalid && e.dirty) {
          e?.errors?.required
            ? this.toastrService.showErrorNotification(
                "Description is required.",
                "Close"
              )
            : e?.errors?.minlength &&
              this.toastrService.showErrorNotification(
                "Description must be at least 4 characters long.",
                "Close"
              );
          return;
        }
        this.specializationForm.valid
          ? ((this.isAdding = !0),
            this.specializationService
              .creeateDoctorCategory(this.specializationForm.value)
              .subscribe({
                next: (n) => {
                  (this.isAdding = !1),
                    this.mapNewData(n.data),
                    (this.addingSpecialization = !1),
                    this.toastSuccessService.showSuccessNotification(
                      "New Specialization is added.",
                      "Close"
                    );
                },
                error: (n) => {
                  (this.isAdding = !1),
                    this.toastrService.showErrorNotification(
                      "Error occurred while adding specialization.",
                      "Close"
                    ),
                    console.error(
                      "Error occurred while adding specialization:",
                      n
                    );
                },
              }))
          : this.toastrService.showErrorNotification(
              "Please fill the Form correctly.",
              "Close"
            );
      }
    }
  };
  (o.ɵfac = function (e) {
    return new (e || o)(b(te), b(V), b(T), b(pe), b(fe), b(be), b(ne));
  }),
    (o.ɵcmp = L({
      type: o,
      selectors: [["app-specializationTable"]],
      standalone: !0,
      features: [R([V, T]), G],
      decls: 30,
      vars: 4,
      consts: [
        ["cd", ""],
        ["unblockButton", ""],
        [
          1,
          "p-3",
          "w-[95%]",
          "mx-auto",
          "relative",
          "flex",
          "flex-col",
          "h-full",
          "overflow-scroll",
          "text-gray-700",
          "bg-white",
          "shadow-md",
          "bg-clip-border",
          "rounded-xl",
        ],
        [1, "flex", "items-center", "justify-between", "gap-5", "px-5", "mb-3"],
        [
          1,
          "flex",
          "items-center",
          "bg-black",
          "text-white",
          "py-2",
          "px-4",
          "rounded-md",
          "shadow-md",
          "hover:bg-blue-600",
          "absolute",
          "top-3",
          "right-3",
          3,
          "click",
        ],
        [1, "fas", "fa-plus-circle", "mr-2", "text-white"],
        [1, "w-full", "mt-5", "text-left", "table-auto", "min-w-max"],
        [1, "p-4", "border-b", "border-blue-gray-100", "bg-blue-gray-50"],
        [
          1,
          "block",
          "font-sans",
          "text-sm",
          "antialiased",
          "font-normal",
          "leading-none",
          "text-blue-gray-900",
          "opacity-70",
        ],
        [
          1,
          "p-4",
          "border-b",
          "border-blue-gray-100",
          "bg-blue-gray-50",
          "text-center",
        ],
        [
          "class",
          "p-4",
          "v-show",
          "addingSpecialization",
          "transition",
          "ease-in-out duration-300",
          3,
          "formGroup",
          4,
          "ngIf",
        ],
        ["class", "even:bg-blue-gray-50/50", 4, "ngFor", "ngForOf"],
        [
          "icon",
          "pi pi-check",
          "key",
          "positionDialog",
          3,
          "styleClass",
          "position",
        ],
        [
          "type",
          "button",
          "pButton",
          "",
          "icon",
          "pi pi-times",
          "label",
          "Cancel",
          1,
          "bg-gray-300",
          "text-gray-800",
          "px-4",
          "py-2",
          "rounded-md",
          "shadow-md",
          "hover:bg-gray-400",
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring-gray-500",
          "focus:ring-opacity-50",
          3,
          "click",
        ],
        [
          "type",
          "button",
          "pButton",
          "",
          "icon",
          "pi pi-check",
          "label",
          "Confirm",
          1,
          "ms-2",
          "bg-blue-500",
          "text-white",
          "px-4",
          "py-2",
          "rounded-md",
          "shadow-md",
          "hover:bg-blue-600",
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring-blue-500",
          "focus:ring-opacity-50",
          3,
          "click",
        ],
        [
          "v-show",
          "addingSpecialization",
          "transition",
          "ease-in-out duration-300",
          1,
          "p-4",
          3,
          "formGroup",
        ],
        [1, "p-4"],
        [
          "type",
          "text",
          "formControlName",
          "name",
          "placeholder",
          "Enter Specialization Name",
          "aria-label",
          "Name",
          "required",
          "",
          1,
          "mb-6",
          "bg-gray-100",
          "border",
          "border-gray-300",
          "text-black",
          "text-sm",
          "rounded-lg",
          "focus:ring-blue-500",
          "focus:border-blue-500",
          "block",
          "w-full",
          "p-2.5",
          "dark:text-black",
          "dark:border-gray-600",
          "dark:placeholder-gray-400",
          "dark:focus:ring-blue-500",
          "dark:focus:border-blue-500",
        ],
        [
          "type",
          "text",
          "formControlName",
          "description",
          "placeholder",
          "Enter Specialization Description",
          "aria-label",
          "Description",
          "required",
          "",
          1,
          "mb-6",
          "bg-gray-100",
          "border",
          "border-gray-300",
          "text-black",
          "text-sm",
          "rounded-lg",
          "focus:ring-blue-500",
          "focus:border-blue-500",
          "block",
          "w-full",
          "p-2.5",
          "dark:text-black",
          "dark:border-gray-600",
          "dark:placeholder-gray-400",
          "dark:focus:ring-blue-500",
          "dark:focus:border-blue-500",
        ],
        [1, "p-3", "flex", "gap-2", "justify-center"],
        [
          1,
          "bg-blue-500",
          "hover:bg-blue-600",
          "text-white",
          "font-bold",
          "py-2",
          "px-4",
          "rounded",
          3,
          "click",
        ],
        [4, "ngIf"],
        [
          1,
          "bg-red-500",
          "hover:bg-red-600",
          "text-white",
          "font-bold",
          "py-2",
          "px-4",
          "rounded",
          3,
          "click",
        ],
        [
          "viewBox",
          "0 0 24 24",
          1,
          "animate-spin",
          "h-4",
          "w-4",
          "mr-3",
          "text-white",
        ],
        [
          "cx",
          "12",
          "cy",
          "12",
          "r",
          "10",
          "stroke",
          "currentColor",
          "stroke-width",
          "4",
          1,
          "opacity-25",
        ],
        [
          "fill",
          "currentColor",
          "d",
          "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.007 8.007 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.86 0-7.291-1.472-9.878-3.853l-1.414 1.415zM20 12c0-3.86-1.472-7.291-3.853-9.878l-1.415 1.414A8.007 8.007 0 0016 12h4zm-9.878 3.853A9.956 9.956 0 0112 20v-4c-.71 0-1.403-.074-2.077-.213l1.415 1.414z",
          1,
          "opacity-75",
        ],
        [1, "even:bg-blue-gray-50/50"],
        [
          1,
          "block",
          "font-sans",
          "text-sm",
          "antialiased",
          "font-normal",
          "leading-normal",
          "text-blue-gray-900",
        ],
        [
          "type",
          "text",
          "aria-label",
          "Name",
          "required",
          "",
          1,
          "mb-6",
          "bg-gray-100",
          "border",
          "border-gray-300",
          "text-black",
          "text-sm",
          "rounded-lg",
          "focus:ring-blue-500",
          "focus:border-blue-500",
          "block",
          "w-full",
          "p-2.5",
          "dark:text-black",
          "dark:border-gray-600",
          "dark:placeholder-gray-400",
          "dark:focus:ring-blue-500",
          "dark:focus:border-blue-500",
          3,
          "ngModelChange",
          "ngModel",
          "value",
          "id",
          "disabled",
        ],
        [
          "type",
          "text",
          "aria-label",
          "Description",
          "required",
          "",
          1,
          "mb-6",
          "bg-gray-100",
          "border",
          "border-gray-300",
          "text-black",
          "text-sm",
          "rounded-lg",
          "focus:ring-blue-500",
          "focus:border-blue-500",
          "block",
          "w-full",
          "p-2.5",
          "dark:text-black",
          "dark:border-gray-600",
          "dark:placeholder-gray-400",
          "dark:focus:ring-blue-500",
          "dark:focus:border-blue-500",
          3,
          "ngModelChange",
          "ngModel",
          "value",
          "id",
          "disabled",
        ],
        [1, "p-4", "flex", "gap-3", "justify-center"],
        [
          "class",
          "p-1 flex gap-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 transition duration-300",
          3,
          "click",
          4,
          "ngIf",
        ],
        [
          1,
          "flex",
          "items-center",
          "px-1",
          "py-1",
          "bg-gray-900",
          "text-white",
          "font-semibold",
          "rounded-lg",
          "shadow-md",
          "hover:bg-black",
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring-blue-400",
          "focus:ring-opacity-75",
          3,
          "routerLink",
        ],
        [1, "fas", "fa-user-md", "mr-2"],
        [
          "class",
          "p-5 flex gap-2 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 transition duration-300",
          3,
          "click",
          4,
          "ngIf",
        ],
        [
          "class",
          "p-2 flex gap-2 rounded-lg bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-200 transition duration-300",
          3,
          "click",
          4,
          "ngIf",
          "ngIfElse",
        ],
        [
          1,
          "p-1",
          "flex",
          "gap-2",
          "rounded-lg",
          "bg-blue-500",
          "text-white",
          "hover:bg-blue-600",
          "focus:outline-none",
          "focus:ring",
          "focus:ring-blue-200",
          "transition",
          "duration-300",
          3,
          "click",
        ],
        [
          "fill",
          "#000000",
          "viewBox",
          "0 0 24 24",
          "xmlns",
          "http://www.w3.org/2000/svg",
          1,
          "h-4",
          "w-4",
        ],
        [
          "d",
          "M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3ZM19 19H5V5H19V19ZM12.75 8.25H11.25V14.25H12.75V8.25ZM14.25 18H9.75V16.5H14.25V18ZM14.25 15.75H9.75V14.25H14.25V15.75Z",
        ],
        [
          1,
          "p-5",
          "flex",
          "gap-2",
          "rounded-full",
          "bg-green-500",
          "text-white",
          "hover:bg-green-600",
          "focus:outline-none",
          "focus:ring",
          "focus:ring-green-200",
          "transition",
          "duration-300",
          3,
          "click",
        ],
        [
          "d",
          "M14.7 10.3L12 13L9.3 10.3L8.2 11.4L12 15.2L15.8 11.4L14.7 10.3ZM12 3C6.486 3 2 7.486 2 13C2 18.514 6.486 23 12 23C17.514 23 22 18.514 22 13C22 7.486 17.514 3 12 3ZM12 21C7.589 21 4 17.411 4 13C4 8.589 7.589 5 12 5C16.411 5 20 8.589 20 13C20 17.411 16.411 21 12 21Z",
        ],
        [
          1,
          "p-2",
          "flex",
          "gap-2",
          "rounded-lg",
          "bg-red-500",
          "text-white",
          "hover:bg-red-600",
          "focus:outline-none",
          "focus:ring",
          "focus:ring-red-200",
          "transition",
          "duration-300",
          3,
          "click",
        ],
        [
          "viewBox",
          "0 0 24 24",
          "fill",
          "none",
          "xmlns",
          "http://www.w3.org/2000/svg",
          1,
          "h-4",
          "w-4",
        ],
        [
          "d",
          "M5.63605 5.63603L18.364 18.364M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
          "stroke",
          "#000000",
          "stroke-width",
          "1.5",
          "stroke-linecap",
          "round",
          "stroke-linejoin",
          "round",
        ],
        [
          1,
          "p-2",
          "flex",
          "gap-2",
          "rounded-lg",
          "bg-green-500",
          "text-white",
          "hover:bg-green-600",
          "focus:outline-none",
          "focus:ring",
          "focus:ring-green-200",
          "transition",
          "duration-300",
          3,
          "click",
        ],
      ],
      template: function (e, n) {
        if (e & 1) {
          let S = h();
          i(0, "div", 2)(1, "div", 3)(2, "button", 4),
            f("click", function () {
              return (
                d(S), p((n.addingSpecialization = !n.addingSpecialization))
              );
            }),
            g(3, "i", 5),
            s(4, " Add Specialization "),
            l()(),
            i(5, "table", 6)(6, "thead")(7, "tr")(8, "th", 7)(9, "p", 8),
            s(10, " S.No "),
            l()(),
            i(11, "th", 7)(12, "p", 8),
            s(13, " Specialization Name "),
            l()(),
            i(14, "th", 7)(15, "p", 8),
            s(16, " Descritption "),
            l()(),
            i(17, "th", 9)(18, "p", 8),
            s(19, " Actions "),
            l()()()(),
            i(20, "tbody"),
            x(21, ke, 12, 2, "tr", 10),
            H(22),
            x(23, Ee, 17, 16, "tr", 11),
            A(),
            l()()(),
            g(24, "p-toast"),
            i(25, "p-confirmDialog", 12, 0)(27, "p-footer")(28, "button", 13),
            f("click", function () {
              d(S);
              let w = E(26);
              return p(w.reject());
            }),
            l(),
            i(29, "button", 14),
            f("click", function () {
              d(S);
              let w = E(26);
              return p(w.accept());
            }),
            l()()();
        }
        e & 2 &&
          (u(21),
          m("ngIf", n.addingSpecialization),
          u(2),
          m("ngForOf", n.specializations),
          u(2),
          m("styleClass", "bg-white shadow-md rounded-lg")(
            "position",
            n.position
          ));
      },
      dependencies: [
        me,
        U,
        Z,
        O,
        ie,
        $,
        J,
        K,
        ee,
        Q,
        de,
        ce,
        se,
        re,
        le,
        ae,
        oe,
        X,
        Y,
        ue,
        W,
      ],
    }));
  let r = o;
  return r;
})();
export { Oe as SpecializationTableComponent };
