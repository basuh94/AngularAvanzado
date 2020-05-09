import {AnimationTriggerMetadata,trigger, state, style, transition, animate} from "@angular/animations";

export const Fundido:AnimationTriggerMetadata = 
    trigger('componentAnimation',[
        transition(':enter',[
            style({
                opacity: 0 
            }),
            animate('500ms linear',style({
                opacity: 1
            }))
        ])
        
    ]);