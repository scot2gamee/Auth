import React from 'react'
import type {
  BottomSheetFooterProps } from '@gorhom/bottom-sheet'
import {
  BottomSheetFooter
} from '@gorhom/bottom-sheet'

interface CustomBottomSheetFooter extends BottomSheetFooterProps { }

const withBottomFooter = (Component: any) => ({ animatedFooterPosition }: CustomBottomSheetFooter) => {
  return (
    <BottomSheetFooter animatedFooterPosition={animatedFooterPosition}>
      <Component />
    </BottomSheetFooter>
  )
}

export default withBottomFooter