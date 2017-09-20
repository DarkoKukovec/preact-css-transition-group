export function getKey(vnode) {
	return vnode.attributes && vnode.attributes.key;
}

export function getComponentBase(component) {
	return component.base;
}

export function onlyChild(children) {
	return children && children[0];
}

export function filterUnrenderableChildren(children) {
	return children && children.filter(i => i !== null && i !== undefined && typeof i !== 'boolean');
}
