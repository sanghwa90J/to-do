import styled from 'styled-components';

export default styled.div<{
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginfRight?: string;
}>`
  margin-top: ${props => props.marginTop || '0'};
  margin-right: ${props => props.marginfRight || '0'};
  margin-bottm: ${props => props.marginBottom || '0'};
  margin-left: ${props => props.marginLeft || '0'};
`;
