export function listToTree(list: string | any[]) {
    const map:any = {};
    let node: any = [];
    const roots = [];

    for (let i = 0; i < list.length; i += 1) {
        map[list[i].id] = i; // initialize the map
        list[i].childern = []; // initialize the childern
    }

    for (let i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parentId !== null) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parentId]].childern.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}