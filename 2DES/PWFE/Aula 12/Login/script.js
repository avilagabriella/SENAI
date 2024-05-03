function loginWithGitHub() {
window.location.href = 'https://github.com/login/oauth/authorize?client_id=58dead100ede5ed62e4f&scope=user';
}
const uelParams = new URLSearchParams(Window.location.search);
const error = uelParams.get('error');
if (error == 'access_denied') {
    window.location.href = 'index.html';
}
