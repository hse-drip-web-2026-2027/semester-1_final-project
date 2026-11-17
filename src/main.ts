import './styles.css'

const status = document.getElementById('startup-status')
if (!status) throw new Error('Не найден элемент startup-status')
status.textContent = 'TypeScript-модуль подключён. Можно начинать работу.'
