import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: string): Leader {
    return LEADERS.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((dish) => dish.featured)[0];
  }
}
