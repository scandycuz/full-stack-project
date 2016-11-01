export const signup = (user, success, error) => {
  console.log(user);
  $.ajax({
    url: 'api/user',
    type: 'POST',
    data: user,
    success,
    error
  })
}

export const login = (user, success, error) => {
  $.ajax({
    url: 'api/session',
    type: 'POST',
    data: user,
    success,
    error
  })
}

export const logout = success => {
  $.ajax({
    url: `api/session`,
    type: 'DELETE',
    success,
    error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
    }
  })
}
