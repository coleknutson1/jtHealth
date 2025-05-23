import './App.css'
import myImage from '/image.jpg';
import { NavLink } from 'react-router';
export default function App() {
  return (
    <>
      <nav>
        <NavLink to={'contact-us'}>Finch</NavLink>
        {/* <NavLink></NavLink>
        <NavLink></NavLink>
        <NavLink></NavLink> */}
        <ul className='title'>Sentinel Finch</ul>
        <ul>Services</ul>
        <ul>Process</ul>
        <ul>Values</ul>
        <ul className='contact-us-button'>Contact Us</ul>
      </nav>
      <body>
        <img src={myImage} alt="sentinal-finch-logo" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas tristique mi sagittis pretium. Curabitur nec feugiat ligula. Pellentesque non ex est. Etiam congue mattis eros ut blandit. Phasellus sodales justo arcu. Etiam sodales turpis libero, sed accumsan justo tristique ut. Quisque posuere scelerisque scelerisque. Donec faucibus, lorem sed vehicula iaculis, nunc risus viverra dolor, ut tincidunt nibh velit a mauris. Vivamus ultricies non massa ut dictum.

          Cras sed nunc sed neque euismod aliquet. Cras porta, ipsum id mollis hendrerit, urna tellus faucibus massa, sit amet vehicula metus lorem sit amet diam. Maecenas nec mauris nec ex semper mollis. Pellentesque vitae pulvinar lacus, a pellentesque libero. Nam nec erat nibh. Mauris metus urna, placerat vel neque in, ornare faucibus sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis convallis venenatis eros. Fusce sagittis gravida diam, eu tempor mauris ultrices id. Cras fringilla nisl id dolor rutrum, at hendrerit ligula consequat. Morbi fringilla mattis urna, et tincidunt metus efficitur dictum. Integer varius tincidunt laoreet. Nulla vestibulum justo ac iaculis placerat. Quisque ut justo vel eros sagittis semper. In interdum, ligula sed mollis pharetra, est tortor sollicitudin nisi, eget pretium sapien orci in libero.

          Sed fringilla lectus eu felis ultrices tincidunt. Curabitur a placerat eros, facilisis tincidunt ipsum. Cras malesuada metus nisl, quis congue tortor tincidunt eu. Vivamus viverra pellentesque ex ac sollicitudin. Aenean iaculis aliquet libero vitae sodales. Maecenas molestie orci ornare nulla fermentum euismod. Mauris ipsum libero, aliquam tincidunt vulputate ac, placerat in dolor. Vivamus nisl orci, accumsan sed tortor rutrum, suscipit tempor est. Phasellus euismod ex eget imperdiet venenatis. Nullam vel odio a leo pretium eleifend. In quis nisl massa. Pellentesque quis risus a leo consectetur hendrerit. Cras dignissim rhoncus leo nec accumsan. Sed nec ligula non velit consequat bibendum. Integer viverra sapien vitae purus imperdiet tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

          Curabitur augue ligula, bibendum eget tempus in, dictum id dui. Maecenas nec mauris ullamcorper, euismod metus vel, porttitor mauris. Integer erat leo, convallis ut nunc sit amet, blandit porta nunc. Donec ac orci consectetur, finibus mauris eget, ultrices massa. Proin viverra, metus quis auctor eleifend, tellus neque mattis arcu, sed mattis felis tortor at quam. Praesent vestibulum orci purus, in maximus lacus porttitor a. Phasellus pellentesque vitae nulla sagittis sodales. Cras ullamcorper, leo vitae pharetra pellentesque, odio tellus ultricies mi, sed tristique arcu quam eget nibh. Fusce tincidunt, risus sit amet congue egestas, quam augue congue urna, condimentum hendrerit purus turpis interdum neque. Etiam eu faucibus dolor.

          Nulla porta, purus nec facilisis tincidunt, nibh mi consectetur nunc, in suscipit orci felis sit amet sem. Etiam elementum, lacus eget pretium finibus, libero dolor ullamcorper dui, et interdum nulla metus vel arcu. Praesent quis purus et nunc aliquam vehicula quis ut metus. Suspendisse iaculis mi et vulputate facilisis. Aliquam diam ex, feugiat a volutpat eu, sodales eu enim. Pellentesque sit amet ligula scelerisque, suscipit ligula quis, imperdiet leo. Aliquam dignissim eros et tincidunt porttitor. Vivamus ultrices nisl nec magna pulvinar lobortis. Mauris sit amet nibh gravida, mollis eros in, interdum neque. Pellentesque viverra pharetra tellus. In libero sem, tempus id nulla a, dignissim molestie lorem.
        </p>
      </body>
    </>
  );
}

