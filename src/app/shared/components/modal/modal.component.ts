import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  OnDestroy, ViewChild, ChangeDetectorRef, ViewContainerRef
} from '@angular/core'
import {Subscription} from 'rxjs'

import {ModalService} from '../../../services/modal.service'
import {LoginFormComponent} from '../login-form/login-form.component'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  public title!: string
  public isOpened = false
  private openSub!: Subscription
  private closeSub!: Subscription
  private componentsMapping: {[key: string]: typeof LoginFormComponent} = {
    login: LoginFormComponent,
  }

  @ViewChild('content', {read: ViewContainerRef, static: false}) content!: ViewContainerRef

  constructor(
    private resolver: ComponentFactoryResolver,
    private modalService: ModalService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.openSub = this.modalService.$openModal.subscribe(componentName => {
      this.isOpened = true
      this.changeDetectorRef.detectChanges()
      this.title = componentName.toUpperCase()
      this.showContent(componentName)
    })
  }

  ngOnDestroy(): void {
    if (this.openSub) {
      this.openSub.unsubscribe()
    }
    if (this.closeSub) {
      this.closeSub.unsubscribe()
    }
  }

  close(): void {
    this.isOpened = false
  }

  private showContent(componentName: string): void {
    const modalFactory = this.resolver.resolveComponentFactory(this.componentsMapping[componentName])
    this.content.clear()
    const component = this.content.createComponent(modalFactory)
    component.instance.exit.subscribe(() => this.close())
  }
}
