const errors = {
  'captcha-failed': 'Капча не пройдена, попробуйте позже',
  'username-format-incorrect': 'Допускаются логины от 4 знаков, содержащие только кириллические или латинские буквы, цифры и «_»',
  'email-format-incorrect': 'Некорректный E-Mail',
  'password-format-incorrect': 'Минимум 8 знаков. Хотя бы одна заглавная, одна строчная и одна цифра',
  'gender-incorrect': 'Некорректный пол',
  'username-unavailable': 'Данный никнейм занят',
  'email-unavailable': 'Данный E-Mail занят',
  'mojang-username-does-not-exist': 'Игрок с данным ником Mojang не существует',
  'internal-server-error': 'Внутренняя ошибка сервера. Попробуйте позже или напишите нам в группу ВК',
  'unable-to-send-email': 'Произошла ошибка при отправке E-Mail. Попробуйте позже или напишите нам в группу ВК',
  'repeat-password-incorrect': 'Пароли не совпадают',
  'otp-incorrect': 'Неправильный код 2FA',
  'login-failed': 'Неправильный никнейм или пароль',
  'wrong-key': 'Несуществующий или истёкший код',
  'no-skin-file': 'Ошибка отправки скина',
  'unauthorized': 'Сессия истекла! Перезайдите в личный кабинет.',
  'file-is-too-big': 'Размер файла слишком большой',
  'file-is-not-png': 'Файл не является картинкой в формате .png',
  'incorrect-size': 'Размер скина некорректный',
  'skin-buy-hd-size': 'Для установки скина данного размера требуется HD-подписка',
  'no-cape-file': 'Ошибка отправки плаща',
  'cape-buy-hd-size': 'Для установки плаща данного размера требуется HD-подписка',
  'no-permissions': 'Недостаточно прав для данного действия',
  'wrong-password': 'Вы ввели неверный пароль',
  'otp-already-enabled': 'Двухфакторная аутентификация уже подключена!',
  'wrong-otp-code': 'Неверный одноразовый пароль!',
  'empty-email-field': 'Заполните поле!'
};
const results = {
  'register': 'Регистрация завершена. Проверьте свою почту.',
  'recovery': 'Код для сброса пароля отправлен. Проверьте свою почту.',
  'recovery-confirm': 'Пароль успешно сброшен. Попробуйте войти теперь.',
  'register-confirm': 'Аккаунт успешно подтверждён.',
  'changemail-confirm': 'Почта успешно изменена',
  'change-skin': 'Скин обновлён успешно.',
  'change-cape': 'Плащ обновлён успешно',
  'change-nickname': 'Никнейм обновлён успешно, перезагрузите страницу',
  'change-email': 'Проверьте новую почту, отправили подтверждение!',
  'buy-hd': 'HD подписка приобретена!',
  'change-name-color': 'Цвет никнейма изменён!',
  'change-password': 'Пароль успешно изменён',
  '2fa-active': 'Двухфакторная аутентификация подключена!',
  'removed-background': 'Фон лаунчера успешно убран!',
  'subscription-activated': 'Подписка активирована!'
};

function getTranslation(translation, id) {
  if (translation[id] === undefined) {
    return id;
  }
  return translation[id];
}
