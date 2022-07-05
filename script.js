window.onscroll = () =>{
  if (document.documentElement.scrollTop > 50) {
    document.getElementById('arrow-btn').style.display = 'initial';
  } else {
    document.getElementById('arrow-btn').style.display = 'none';
  }
}