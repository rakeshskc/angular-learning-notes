import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
 
  private _status: boolean=true;
    constructor(private _viewContainer: ViewContainerRef,
      private templateRef: TemplateRef<any>) {
  }
  @Input()
  set status(condition: boolean) {
    this._status = condition
    this._updateView();
  }

  _updateView() {
    if (this._status) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this._viewContainer.clear();
    }
  }

}
