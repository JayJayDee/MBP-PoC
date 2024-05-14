import { IBannable } from './bannable.interface';
import { Meal } from './meal';

export class MealCategory implements IBannable {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _meals: Meal[];
  private _banned: boolean;

  public markAsBanned(): void {
    this._banned = true;
  }

  public isBanned(): boolean {
    return this._banned;  
  }

  public get id() { return this._id; }
  public get name() { return this._name; }
  public get meals() { return this._meals; }
}
