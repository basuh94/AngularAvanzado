import {AnimationTriggerMetadata,trigger, state, style, transition, animate} from "@angular/animations";

export const fadeIn:AnimationTriggerMetadata = 
    trigger('fadeIn',[
        transition(':enter',[
            style({
                opacity: 0, 
                //transform:'translateY(-15%)'
                //transoform: 'rotate(150deg)'

            }),
            animate('300ms linear',style({
                opacity: 1,
                //transform:'translateY(0)'
                //transoform: 'rotate(0deg)'
            }))
        ])
        
    ]);