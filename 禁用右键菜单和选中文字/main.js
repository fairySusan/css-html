let noContext = document.getElementById('noContextMenu');

// 禁用右键菜单
noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});