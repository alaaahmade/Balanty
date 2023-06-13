import { ReactElement, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  StyledLogo,
  StyledNavBox,
  StyledSearchInput,
  StyledMnu,
  StyledLabel,
} from '../../index';

const NavBar = (): ReactElement => {
  const [search, setSearch] = useState('');
  return (
    <StyledNavBox>
      <StyledLogo>Logo</StyledLogo>
      <StyledLabel htmlFor="search">
        <AiOutlineSearch
          style={{
            color: '#3BB64B',
            fontWeight: 'bold',
            fontSize: '30px',
          }}
        />
      </StyledLabel>
      <StyledSearchInput
        id="search"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search"
      />

      <StyledMnu />
    </StyledNavBox>
  );
};

export default NavBar;
