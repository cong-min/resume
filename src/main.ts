import './css/index.less';

document.addEventListener('copy', (event) => {
  const { clipboardData } = event;
  const selection = document.getSelection();
  if (!clipboardData || !selection) return;
  const msg = `${selection.toString()}

💡 著作权归 Cong Min 所有，转载粘贴请注明出处
License: CC-BY-SA-4.0
Copyright: resume.congm.in
Github: github.com/cong-min/resume
`;
  clipboardData.setData('text/plain', msg);
  event.preventDefault();
});
