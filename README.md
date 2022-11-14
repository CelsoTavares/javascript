# Javascript

## JS HTML DOM

*   ### Encontrando elementos HTML

### Method
***document.getElementById(id)***	Encontrar um elemento pelo id do elemento <br>
***document.getElementsByTagName(name)***	Localizar elementos pelo nome da tag <br>
***document.getElementsByClassName(name)***	Localizar elementos por nome de classe <br>
***document.querySelector()*** encontrar um elementos HTML que correspondem a um seletor CSS especificado <br>
***document.querySelectorAll()*** encontrar todos os elementos HTML que correspondem a um seletor CSS especificado (id, nomes de classes, tipos, atributos, valores de atributos, etc)

*   ### Alterando elementos HTML
### Property

***element.innerHTML*** =  novo conteúdo html Altera o HTML interno de um elemento <br>
***element.attribute*** = new value Altera o valor do atributo de um elemento HTML <br>
***element.style.property*** = novo estilo Muda o estilo de um elemento HTML 
### Method	
***element.setAttribute(attribute, value)*** Alterar o valor do atributo de um elemento HTML

*   ### Adicionando e excluindo elementos
### Method	

***document.createElement(element)***	Cria um HTML element <br>
***document.removeChild(element)***	Remove um HTML element <br>
***document.appendChild(element)***	Adiciona um HTML element <br>
***document.replaceChild(new, old)***	Substitui um element por outro <br>
***document.write(text)***	Gravar no fluxo de saída HTML

*   ### Adicionando manipuladores de eventos
### Method
***document.getElementById(id).onclick = function(){code}*** Adicionando código do manipulador de eventos a um evento onclick

*   ### Encontrando objetos HTML

### Property
***document.anchors***	Retorna todos os elementos *a* que possuem um atributo name	<br>
***document.baseURI***	Retorna o URI base absoluto do documento <br>
***document.body***	  Retorna o *body* element <br>
***document.cookie***	  Retorna o cookie do documento	<br>
***document.doctype***  Retorna o doctype do documento	<br>
***document.documentElement***	Retorna o *html* element	<br>
***document.documentMode***	Retorna o modo usado pelo navegador <br>	
***document.documentURI***	Retorna o URI do documento	<br>
***document.domain***	Returns Retorna o nome de domínio do servidor de documentos	<br>	
***document.embeds***	Retorna todos *embe* elements <br>	
***document.forms***	Retorna todos *form* elements <br>
***document.head***	Retorna o *head* element <br>
***document.images***	Retorna todos *img* elements <br>
***document.implementation***	Retorna a implementação do DOM	<br>
***document.inputEncoding***	Retorna a codificação do documento *conjunto de caracteres*	<br>
***document.lastModified***	Retorna a data e hora em que o documento foi atualizado	<br>
***document.links***	Retorna todos os elementos *area* e *a* que possuem um atributo href <br>
***document.readyState***	Retorna o status *carregando* do documento <br>	
***document.referrer***	Retorna o URI do referenciador *o documento de ligação* <br>	 
***document.scripts***	Retorna todos os elementos *script* elements <br>	 
***document.strictErrorChecking***	Retorna se a verificação de erros for aplicada <br>	
***document.title***	Retorna o *title* element	<br>
***document.URL***	Retorna o URL completo do document <br>

* ### Navegação JavaScript HTML DOM

Com o HTML DOM, você pode navegar na árvore de nós usando relacionamentos de nós.

### Nós DOM

De acordo com o padrão W3C HTML DOM, tudo em um documento HTML é um nó:

* O documento inteiro é um nó de documento <br>
* Cada elemento HTML é um nó de elemento <br>
* O texto dentro dos elementos HTML são nós de texto <br>
* Todos os comentários são nós de comentários <br>

### Relacionamentos de nós

Os nós na árvore de nós têm um relacionamento hierárquico entre si. <br>
Os termos pai, filho e irmão são usados ​​para descrever os relacionamentos.<br>

Você pode usar as seguintes propriedades de nó para navegar entre nós com JavaScript:

* **parentNode**  retorna o nome do nó pai do nó selecionado
* **childNodes[nodenumber]** retorna uma coleção viva de nós filhos de um dado elemento
* **firstChild** retorna o node (nó) do primeiro elemento filho de uma árvore DOM
* **lastChild** retorna o node (nó) do último elemento filho de uma árvore DOM
* **nextSibling** retorna o próximo nó irmão como um nó de elemento
* **previousSibling** retorna o elemento nó irmão previamente selecionado (o próximo nó na mesma hierarquia de árvore)

*   ### O método addEventListener()

### Exemplo

Adicione um ouvinte de eventos que é acionado quando um usuário clica em um botão:

***document.getElementById("myBtn").addEventListener("click", displayDate);***

### Sintaxe

***element.addEventListener(event, function, useCapture);*** <br>
O primeiro parâmetro é o tipo do evento (como " click" ou " mousedown" ou qualquer outro evento HTML DOM .) <br>
O segundo parâmetro é a função que queremos chamar quando o evento ocorrer. <br>
O terceiro parâmetro é um valor booleano que especifica se deve-se usar borbulhamento de eventos ou captura de eventos. Este parâmetro é opcional.

### Exemplo

Alerta "Olá Mundo!" quando o usuário clica em um elemento:

***element.addEventListener("click", function(){ alert("Hello World!"); });***

### Exemplo

Alerta "Olá Mundo!" quando o usuário clica em um elemento:

***element.addEventListener("click", myFunction);***

function myFunction() { <br>
  alert ("Hello World!"); <br>
}

Você pode adicionar eventos de diferentes tipos ao mesmo elemento:

### Exemplo
***element.addEventListener("mouseover", myFunction);*** <br>
***element.addEventListener("click", mySecondFunction);*** <br>
***element.addEventListener("mouseout", myThirdFunction);*** <br>

*   ### HTML DOM Events

### Event	Description	 Belongs To

***abort***	The event occurs when the loading of a media is aborted	UiEvent, Event <br>
***afterprint***	The event occurs when a page has started printing, or if the print dialogue box has been closed	Event <br>
***animationend***	The event occurs when a CSS animation has completed	AnimationEvent <br>
***animationiteration***	The event occurs when a CSS animation is repeated	AnimationEvent <br>
***animationstart***	The event occurs when a CSS animation has started	AnimationEvent <br>
***beforeprint***	The event occurs when a page is about to be printed	Event <br>
***beforeunload***	The event occurs before the document is about to be unloaded UiEvent, Event <br>
***blur***	The event occurs when an element loses focus	FocusEvent <br>
***canplay***	The event occurs when the browser can start playing the media (when it has buffered enough to begin)	Event <br>
***canplaythrough***	The event occurs when the browser can play through the media without stopping for buffering	Event <br>
***change***	The event occurs when the content of a form element, the selection, or the checked state have changed (for input, select, and textarea)	Event <br>
***click***	The event occurs when the user clicks on an element	MouseEvent <br>
***contextmenu***	The event occurs when the user right-clicks on an element to open a context menu MouseEvent <br>
***copy***	The event occurs when the user copies the content of an element	ClipboardEvent <br>
***cut***	The event occurs when the user cuts the content of an element	ClipboardEvent <br>
***dblclick***	The event occurs when the user double-clicks on an element	MouseEvent <br>
***drag***	The event occurs when an element is being dragged DragEvent <br> 
***dragend*** The event occurs when the user has finished dragging an element	DragEvent <br>
***dragenter***	The event occurs when the dragged element enters the drop target DragEvent <br>
***dragleave***	The event occurs when the dragged element leaves the drop target DragEvent <br>
***dragover***	The event occurs when the dragged element is over the drop target DragEvent <br>
***dragstart***	The event occurs when the user starts to drag an element	DragEvent <br>
***drop***	The event occurs when the dragged element is dropped on the drop target	DragEvent <br>
***durationchange***	The event occurs when the duration of the media is changed	Event <br>
***ended***	The event occurs when the media has reach the end (useful for messages like "thanks for listening")	Event <br>
***error***	The event occurs when an error occurs while loading an external file ProgressEvent, UiEvent, Event <br>
***focus***	The event occurs when an element gets focus	FocusEvent <br> 
***focusin***	The event occurs when an element is about to get focus	FocusEvent <br>
***focusout***	The event occurs when an element is about to lose focus	FocusEvent <br>
***fullscreenchange***	The event occurs when an element is displayed in fullscreen mode	Event <br>
***fullscreenerror***	The event occurs when an element can not be displayed in fullscreen mode	Event <br>
***hashchange***	The event occurs when there has been changes to the anchor part of a URL HashChangeEvent <br>
***input***	The event occurs when an element gets user input	InputEvent, Event <br>
***invalid***	The event occurs when an element is invalid	Event <br>
***keydown***	The event occurs when the user is pressing a key KeyboardEvent <br>
***keypress***	The event occurs when the user presses a key KeyboardEvent <br>
***keyup***	The event occurs when the user releases a key KeyboardEvent <br>
***load***	The event occurs when an object has loaded	UiEvent, Event <br>
***loadeddata***	The event occurs when media data is loaded	Event <br>
***loadedmetadata***	The event occurs when meta data (like dimensions and duration) are loaded Event <br>
***loadstart***	The event occurs when the browser starts looking for the specified media ProgressEvent <br>
***message***	The event occurs when a message is received through the event source Event <br>
***mousedown***	The event occurs when the user presses a mouse button over an element MouseEvent <br>
***mouseenter***	The event occurs when the pointer is moved onto an element	MouseEvent <br>
***mouseleave***	The event occurs when the pointer is moved out of an element	MouseEvent <br>
***mousemove***	The event occurs when the pointer is moving while it is over an element	MouseEvent <br> 
***mouseover***	The event occurs when the pointer is moved onto an element, or onto one of its children	MouseEvent <br>
***mouseout***	The event occurs when a user moves the mouse pointer out of an element, or out of one of its children MouseEvent <br>
***mouseup*** The event occurs when a user releases a mouse button over an element	MouseEvent <br>
***mousewheel***	Deprecated. Use the wheel event instead	WheelEvent <br>
***offline***	The event occurs when the browser starts to work offline	Event <br>
***online***	The event occurs when the browser starts to work online	Event <br>
***open***	The event occurs when a connection with the event source is opened	Event <br>
***pagehide***	The event occurs when the user navigates away from a webpage	PageTransitionEvent <br>
***pageshow***	The event occurs when the user navigates to a webpage	PageTransitionEvent <br>
***paste***	The event occurs when the user pastes some content in an element	ClipboardEvent <br>
***pause***	The event occurs when the media is paused either by the user or programmatically	Event <br>
***play***	The event occurs when the media has been started or is no longer paused	Event <br>
***playing***	The event occurs when the media is playing after having been paused or stopped for buffering Event <br>
***popstate***	The event occurs when the window's history changes	PopStateEvent <br>
***progress***	The event occurs when the browser is in the process of getting the media data (downloading the media) Event <br>
***ratechange***	The event occurs when the playing speed of the media is changed	Event <br>
***resize***	The event occurs when the document view is resized	UiEvent, Event <br>
***reset***	The event occurs when a form is reset	Event <br>
***scroll***	The event occurs when an element's scrollbar is being scrolled	UiEvent, Event <br>
***search***	The event occurs when the user writes something in a search field (for <input="search">)	Event <br>
***seeked***	The event occurs when the user is finished moving/skipping to a new position in the media	Event <br>
***seeking***	The event occurs when the user starts moving/skipping to a new position in the media	Event <br>
***select***	The event occurs after the user selects some text (for <input> and <textarea>)	UiEvent, Event <br>
***show***	The event occurs when a <menu> element is shown as a context menu Event <br>
***stalled***	The event occurs when the browser is trying to get media data, but data is not available Event <br>
***storage***	The event occurs when a Web Storage area is updated	StorageEvent <br>
***submit***	The event occurs when a form is submitted	Event <br>
***suspend***	The event occurs when the browser is intentionally not getting media data	Event <br>
***timeupdate***	The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)	Event <br>
***toggle***	The event occurs when the user opens or closes the <details> element Event <br>
***touchcancel***	The event occurs when the touch is interrupted	TouchEvent <br>
***touchend***	The event occurs when a finger is removed from a touch screen TouchEvent <br>
***touchmove***	The event occurs when a finger is dragged across the screen	TouchEvent <br>
***touchstart***	The event occurs when a finger is placed on a touch screen	TouchEvent <br>
***transitionend***	The event occurs when a CSS transition has completed TransitionEvent <br>
***unload***	The event occurs once a page has unloaded (for <body>)	UiEvent, Event <br>
***volumechange***	The event occurs when the volume of the media has changed (includes setting the volume to "mute")	Event <br>
***waiting***	The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data) Event <br>
***wheel***	The event occurs when the mouse wheel rolls up or down over an element	WheelEvent <br>

*   ### HTML DOM Event Properties and Methods

### Property/Method	Description	Belongs To
***altKey***	Returns whether the "ALT" key was pressed when the mouse event was triggered	MouseEvent <br>
***altKey***	Returns whether the "ALT" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent <br>
***animationName***	Returns the name of the animation	AnimationEvent <br>
***bubbles***	Returns whether or not a specific event is a bubbling event	Event <br>
***button***	Returns which mouse button was pressed when the mouse event was triggered	MouseEvent <br>
***buttons***	Returns which mouse buttons were pressed when the mouse event was triggered	MouseEvent <br>
***cancelable***	Returns whether or not an event can have its default action prevented	Event <br>
***charCode***	Returns the Unicode character code of the key that triggered the onkeypress event	KeyboardEvent <br>
***changeTouches***	Returns a list of all the touch objects whose state changed between the previous touch and this touch	TouchEvent
***clientX***	Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was ***triggered***	MouseEvent, TouchEvent <br>
***clientY***	Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was ***triggered***	MouseEvent, TouchEvent <br>
***clipboardData***	Returns an object containing the data affected by the clipboard operation	ClipboardData <br>
***code***	Returns the code of the key that triggered the event	KeyboardEvent <br>
***composed***	Returns whether the event is composed or not	Event <br>
***ctrlKey***	Returns whether the "CTRL" key was pressed when the mouse event was triggered	MouseEvent <br>
***ctrlKey***	Returns whether the "CTRL" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent <br>
***currentTarget***	Returns the element whose event listeners triggered the event	Event <br>
***data***	Returns the inserted characters	InputEvent <br>
***dataTransfer***	Returns an object containing the data being dragged/dropped, or inserted/deleted	DragEvent, InputEvent <br>
***defaultPrevented***	Returns whether or not the preventDefault() method was called for the event	Event <br>
***deltaX***	Returns the horizontal scroll amount of a mouse wheel (x-axis)	WheelEvent <br>
***deltaY***	Returns the vertical scroll amount of a mouse wheel (y-axis)	WheelEvent <br>
***deltaZ***	Returns the scroll amount of a mouse wheel for the z-axis	WheelEvent <br>
***deltaMode***	Returns a number that represents the unit of measurements for delta values (pixels, lines or pages)	WheelEvent <br>
***detail***	Returns a number that indicates how many times the mouse was clicked	UiEvent <br>
***elapsedTime***	Returns the number of seconds an animation has been running	AnimationEvent <br>
***elapsedTime***	Returns the number of seconds a transition has been running	  <br>
***eventPhase***	Returns which phase of the event flow is currently being evaluated	Event <br>
***getTargetRanges()***	Returns an array containing target ranges that will be affected by the insertion/deletion	InputEvent <br>
***getModifierState()***	Returns an array containing target ranges that will be affected by the insertion/deletion	MouseEvent <br>
***inputType***	Returns the type of the change (i.e "inserting" or "deleting")	InputEvent <br>
***isComposing***	Returns whether the state of the event is composing or not	InputEvent, KeyboardEvent <br>
***isTrusted***	Returns whether or not an event is trusted	Event <br>
***key***	Returns the key value of the key represented by the event	KeyboardEvent <br>
***key***	Returns the key of the changed storage item	StorageEvent <br>
***keyCode***	Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	KeyboardEvent <br>
***location***	Returns the location of a key on the keyboard or device	KeyboardEvent <br>
***lengthComputable***	Returns whether the length of the progress can be computable or not	ProgressEvent <br>
***loaded***	Returns how much work has been loaded	ProgressEvent <br>
***metaKey***	Returns whether the "META" key was pressed when an event was triggered	MouseEvent <br>
***metaKey***	Returns whether the "meta" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent <br>
***MovementX***	Returns the horizontal coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent <br>
***MovementY***	Returns the vertical coordinate of the mouse pointer relative to the position of the last mousemove event	MouseEvent <br>
***newValue***	Returns the new value of the changed storage item	StorageEvent <br>
***newURL***	Returns the URL of the document, after the hash has been changed	HasChangeEvent <br>
***offsetX***	Returns the horizontal coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent <br>
***offsetY***	Returns the vertical coordinate of the mouse pointer relative to the position of the edge of the target element	MouseEvent <br>
***oldValue***	Returns the old value of the changed storage item	StorageEvent <br>
***oldURL***	Returns the URL of the document, before the hash was changed	HasChangeEvent <br>
***onemptied***	The event occurs when something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects)	<br> 
***pageX***	Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent <br>
***pageY***	Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered	MouseEvent <br>
***persisted***	Returns whether the webpage was cached by the browser	PageTransitionEvent <br>
***preventDefault()***	Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur	Event <br>
***propertyName***	Returns the name of the CSS property associated with the animation or transition	AnimationEvent, TransitionEvent <br>
***pseudoElement***	Returns the name of the pseudo-element of the animation or transition	AnimationEvent, TransitionEvent
region		MouseEvent <br>
***relatedTarget***	Returns the element related to the element that triggered the mouse event	MouseEvent <br>
***relatedTarget***	Returns the element related to the element that triggered the event	FocusEvent <br>
***repeat***	Returns whether a key is being hold down repeatedly, or not	KeyboardEvent <br>
***screenX***Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent <br>
***screenY***	Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered	MouseEvent <br>
***shiftKey***	Returns whether the "SHIFT" key was pressed when an event was triggered	MouseEvent <br>
***shiftKey***	Returns whether the "SHIFT" key was pressed when the key event was triggered	KeyboardEvent, TouchEvent <br>
***state***	Returns an object containing a copy of the history entries	PopStateEvent <br>
***stopImmediatePropagation()***	Prevents other listeners of the same event from being called	Event <br>
***stopPropagation()***	Prevents further propagation of an event during event flow	Event <br>
***storageArea***	Returns an object representing the affected storage object	StorageEvent <br>
***target***	Returns the element that triggered the event	Event <br>
***targetTouches***	Returns a list of all the touch objects that are in contact with the surface and where the touchstart event <br> occured on the same target element as the current target element	TouchEvent <br>
***timeStamp***	Returns the time (in milliseconds relative to the epoch) at which the event was created	Event <br>
***total***	Returns the total amount of work that will be loaded	ProgressEvent <br>
***touches***	Returns a list of all the touch objects that are currently in contact with the surface	TouchEvent <br>
***transitionend***	The event occurs when a CSS transition has completed	TransitionEvent <br>
***type***	Returns the name of the event	Event <br>
***url***Returns the URL of the changed item's document	StorageEvent <br>
***which***	Returns which mouse button was pressed when the mouse event was triggered	MouseEvent <br>
***which***	Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event	KeyboardEvent <br>
***view***	Returns a reference to the Window object where the event occurred	UiEvent


#####      Acesse também meu [Linkedin](https://www.linkedin.com/in/celsotavaresjunior/)
