window.onload = function(){
	let topo = document.querySelector('.topo'),
	menus = document.querySelector('.topo .menus'),
	logo = document.querySelector('.topo .menus .logo'),

	conteudo = document.querySelector('.conteudo'),
	banner = document.querySelector('.conteudo .banner'),

	rodape = document.querySelector('.rodape'),

	topoAtivo, mobileAtivo,

	docX, docY;

	controllScrollPage();

	document.addEventListener( "scroll", () => {
		controllScrollPage();
	});

	function concatString( base, restante ){
		return `${base} ${restante}`;
	}

	function controllScrollPage(){
		docX = window.screen.width;
		docY = window.pageYOffset || window.scrollY;

		mobileAtivo = (docX <= 768 )? true : false;
		topoAtivo = ( docY - banner.offsetHeight > 0 )? true : false;

		let classTopoDefault = 'topo text-white';

		if ( mobileAtivo ) {
			topo.className = concatString(classTopoDefault, 'bg-dark');
			if ( topoAtivo ) {
				topo.className = concatString(classTopoDefault, 'fixed-top bg-dark');
			}
		}else {
			topo.className = concatString(classTopoDefault, 'position-absolute');
			if ( topoAtivo ) {
				topo.className = concatString(classTopoDefault, 'fixed-top bg-dark');
			}
		}

		if ( topoAtivo ) {
			menus.classList.add('navbar-solid');
		}else{
			menus.classList.remove('navbar-solid');
		}
	}
}			