import { KTippyProps, popover } from 'svelte-ktippy';

import TextTooltip from './TextTooltip.svelte';
import ItemTooltip from './ItemTooltip.svelte';
import SpellTooltip from './SpellTooltip.svelte';
import RuneTooltip from './RuneTooltip.svelte';

export function popoverText(anchorNode: HTMLElement, props: TextTooltipProps): PopoverFunction {
	const tippyProps: KTippyProps = {
		...defaultProps,
		component: TextTooltip,
		props,
	};
	return popover(anchorNode, tippyProps);
}
export function popoverItem(anchorNode: HTMLElement, props: ItemTooltipProps): PopoverFunction {
	const tippyProps: KTippyProps = {
		...defaultProps,
		component: ItemTooltip,
		props,
	};
	return popover(anchorNode, tippyProps);
}

export function popoverSpell(anchorNode: HTMLElement, props: SpellTooltipProps): PopoverFunction {
	const tippyProps: KTippyProps = {
		...defaultProps,
		component: SpellTooltip,
		props,
	};
	return popover(anchorNode, tippyProps);
}

export function popoverRune(anchorNode: HTMLElement, props: RuneTooltipProps): PopoverFunction {
	const tippyProps: KTippyProps = {
		...defaultProps,
		component: RuneTooltip,
		props,
	};
	return popover(anchorNode, tippyProps);
}

export interface TextTooltipProps {
	text: string;
}

export interface ItemTooltipProps {
	itemId: number;
}

export interface SpellTooltipProps {
	spellName: string;
}

export interface RuneTooltipProps {
	runeId: number;
}

const defaultProps: Partial<KTippyProps> = {
	arrow: true,
	followCursor: false,
};

interface PopoverFunction {
	destroy: () => void;
}
