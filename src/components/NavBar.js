import { AppBar, Wrapper, Logo, MenuItem, Left, Center, Right } from '@material-ui/core'

const Navbar = () => {
   return (
   <AppBar position="fixed">
      <Wrapper>
        <Left>
          <Logo>MAYA</Logo>
        </Left>
        <Center>
           <MenuItem>Categorias</MenuItem>
           <MenuItem>Ofertas</MenuItem>
           <MenuItem>Novedades</MenuItem>
           <MenuItem>Contacto</MenuItem>
        </Center>
       <Right>

       </Right>
      </Wrapper>
   </AppBar>
   );
}

export default Navbar;

