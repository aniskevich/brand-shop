import { Injectable } from '@angular/core'
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public $openModal = new Subject<string>()

  constructor() { }

  showModal(contentName: string): void {
    this.$openModal.next(contentName)
  }
}
