import { createPopper } from '@popperjs/core';

export default function createPopperAction() {
	let popperElement, popperTooltip, popperParams;
	let popper;
	
	function initialisePopper() {
		if (popperElement && popperTooltip) {
			popper = createPopper(popperElement, popperTooltip, popperParams);
		}
	}
	
	function destroyPopper() {
		if (popper) {
			popper.destroy();
			popper = null;
		}
	}
	
	function usePopperElement(element){
		popperElement = element;
		initialisePopper();
		return {
			destroy() {
				popperElement = null;
				destroyPopper();
			}
		}
	}
	
	function usePopperTooltip(element, params){
		popperTooltip = element;
		popperParams = params;
		initialisePopper();
		
		return {
			update(newParams) {
				popperParams = newParams;
				popper.setOptions(popperParams);
			},
			destroy() {
				popperTooltip = null;
				destroyPopper();
			}
		}
	}
	return [usePopperElement, usePopperTooltip];
}


// import { createPopper } from '@popperjs/core';

// export default function createPopperAction() {
// 	let popperElement, popperTooltip;
	
// 	function initialisePopper() {
// 		if (popperElement && popperTooltip) {
// 			createPopper(popperElement, popperTooltip, { 
// 				placement: 'bottom-start',
// 			});
// 		}
// 	}
	
// 	function usePopperElement(element, params){
// 		popperElement = element;
// 		initialisePopper();
// 	}
// 	function usePopperTooltip(element, params){
// 		popperTooltip = element;
// 		initialisePopper();
// 	}
// 	return [usePopperElement, usePopperTooltip];
// }

