import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'app-drag-drop-sample',
    templateUrl: './drag-drop.sample.html',
    styleUrls: ['drag-drop.sample.css']
})
export class DragDropSampleComponent {

    public draggedElem = false;
    public customDragged = false;
    public ghostInDropArea = false;
    public friendlyArea = true;
    public draggingElem = false;
    public dragEnteredArea = false;
    public draggableElems = ['Suspect 1', 'Suspect 2', 'Suspect 3', 'Suspect 4'];

    constructor(private cdr: ChangeDetectorRef) {
    }

    public onDragStart() {
        this.draggingElem = true;
        this.cdr.detectChanges();
    }

    public onDragCageEnter() {
        this.dragEnteredArea = true;
    }

    public onDragCageLeave() {
        this.dragEnteredArea = false;
    }

    public onDragEnd() {
        this.draggingElem = false;
        this.cdr.detectChanges();
    }

    public onEnterCustomOutside(event) {
        if (event.drag.data.id === 'customGhost') {
            this.ghostInDropArea = true;
            this.friendlyArea = true;
        }
    }

    public onEnterCustomCage(event) {
        if (event.drag.data.id === 'customGhost') {
            this.ghostInDropArea = true;
            this.friendlyArea = false;
        }
    }

    public onLeaveCustom(event) {
        if (event.drag.data.id === 'customGhost') {
            this.ghostInDropArea = false;
        }
    }
}
