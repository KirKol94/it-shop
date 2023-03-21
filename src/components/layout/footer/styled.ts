import styled from 'styled-components'
import { borders, bp, colors, fonts } from '@/styled/vars'
import Logo from '@ui/logo/Logo'
import VkIcon from '@/assets/svg/vk.svg'
import { RootContainer } from '@root/RootContainer'
import { RootButton } from '@root/RootButton'

export const FooterWrapper = styled.footer`
  width: 100%;
  border-top: ${borders.delimeter};
  padding: 80px 0;
  background-color: ${colors.violet};
  color: ${colors.white};
`

export const Container = styled(RootContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  ${bp.md} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`

export const LinksBlock = styled(Block)`
  ${bp.md} {
    display: none;
  }
`

export const FooterLogo = styled(Logo)`
  margin-bottom: 24px;
`

export const Button = styled(RootButton)`
  width: 100%;
  margin-bottom: 14px;
  color: ${colors.white};
`

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  font-style: normal;
  gap: 24px;
`

export const AddressText = styled.p`
  font-family: ${fonts.exo};
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
  ${bp.md} {
    text-align: center;
  }
`

export const Subtitle = styled.p<{ mod: 'nav' | 'social' }>`
  font-family: ${fonts.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  margin-bottom: ${({ mod }) => (mod === 'nav' ? '8px' : '14px')};
`

export const NewsLetter = styled.div`
  max-width: 280px;
`

export const NewsLetterTitle = styled.p`
  margin-bottom: 14px;
  color: ${colors.white};
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  font-family: ${fonts.exo};
  font-weight: 400;

  & > input:focus + label,
  & > input:not(:placeholder-shown) + label {
    transform: translateY(-20px) scale(0.75);
    color: ${colors.white};
  }
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  display: block;
  background-color: transparent;
  color: ${colors.gray};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  pointer-events: none;
  text-align: left;
  transform: translateY(-50%);
  transform-origin: 0 0;
  transition: all 200ms cubic-bezier(0.25, 0.8, 0.25, 1);
  white-space: pre-wrap;
  will-change: transform;
`

export const InputText = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 18px 10px 6px;
  border: 1px solid ${colors.gray};
  border-radius: 4px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transition: border-color 0.3s;
  color: ${colors.white};
  background-color: transparent;
`

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: ${fonts.exo};
  font-weight: 300;
`

export const Socials = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`

export const SocialsIcon = styled.span`
  position: relative;
  padding: 6px 16px;
  border-radius: 50%;
  background: linear-gradient(91.06deg, ${colors.neon} 0%, #6f5b39 100%);
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.25);

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    transform: translate(-50%, -50%);
    background-image: url(${VkIcon});
  }
`

export const Privacy = styled.p`
  color: ${colors.gray};
  font-family: ${fonts.exo};
  font-size: 10px;
  font-weight: 400;
  text-align: center;

  & > a {
    color: ${colors.neon};
    text-decoration-line: underline;
  }
`

export const GenderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
`

export const GenderInput = styled.input`
  position: absolute;
  width: 25px;
  height: 25px;
  padding: 0;
  margin: 4px 0 0;
  cursor: pointer;
  opacity: 0;

  &:checked + label > span {
    border-color: ${colors.white};
  }

  & + label > span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 3px solid ${colors.gray};
    border-radius: 50%;
    margin: 0 10px 2px 0;
    cursor: pointer;
    vertical-align: bottom;
  }

  &:checked + label > span > span {
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1em;
    margin: 2px;
    background: ${colors.white};
  }
`

export const GenderLabel = styled.label`
  font-family: ${fonts.exo};
  font-weight: 400;
  cursor: pointer;
`
