
import { Conf } from "../core/conf";
import { MyDisplay } from "../core/myDisplay";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Text extends MyDisplay {

  public ix:number;
  public iy:number;

  public isActive:boolean = false;

  constructor(opt:any) {
    super(opt)

    this.ix = opt.ix;
    this.iy = opt.iy;

    this._changeTxt();
  }


  public setActive(b:boolean): void {
    this.isActive = b;

    if(b) {
      this.addClass('-active');
      this._changeTxt();
    } else {
      this.removeClass('-active');
    }
  }


  private _changeTxt(): void {
    this.getEl().innerHTML = Util.instance.randomArr('ABCDEFGHIKLMNOPRSTUVWXYZ0123456789'.split(''));
    if(this.ix == Conf.instance.LINE - 1) {
      this.getEl().innerHTML += '<br>'
    }
  }

}