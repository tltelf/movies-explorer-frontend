export const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : res.json().then((data) =>
        Promise.reject({
          status: `Ошибка: ${res.status}`,
          message: data.message,
        })
      );
};
