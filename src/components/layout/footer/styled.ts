import styled from 'styled-components'
import { bgColors, borderColors, borders, textColors } from '@/styled/vars'
import { RootButton, RootContainer } from '@/styled/root'
import Logo from '@ui/logo/Logo'
import VkIcon from '@/assets/svg/vk.svg'

export const FooterWrapper = styled.footer`
  width: 100%;
  border-top: ${borders.delimeter};
  padding: 80px 0;
  background-color: ${bgColors.main};
  color: ${textColors.main};
`

export const Container = styled(RootContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterLogo = styled(Logo)`
  margin-bottom: 24px;
`

export const Button = styled(RootButton)`
  width: 100%;
  margin-bottom: 14px;
  color: ${textColors.main};
`

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  font-style: normal;
  gap: 24px;
`

export const AddressText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 19px;
`

export const Subtitle = styled.p<{ mod: 'nav' | 'social' }>`
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
  color: ${textColors.main};
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

  & > input:focus + label,
  & > input:not(:placeholder-shown) + label {
    transform: translateY(-20px) scale(0.75);
    color: ${textColors.main};
  }
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  display: block;
  background-color: transparent;
  color: ${textColors.gray};
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
  border: 1px solid ${borderColors.gray};
  border-radius: 4px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  transition: border-color 0.3s;
  color: ${textColors.main};
  background-color: transparent;
`

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  background: linear-gradient(91.06deg, ${bgColors.pink} 0%, #6f5b39 100%);
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
  color: ${textColors.gray};
  font-size: 10px;
  font-weight: 400;
  text-align: center;

  & > a {
    color: ${textColors.neon};
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
    border-color: ${textColors.main};
  }

  & + label > span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 3px solid ${borderColors.gray};
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
    background: ${textColors.main};
  }
`

export const GenderLabel = styled.label`
  cursor: pointer;
`
