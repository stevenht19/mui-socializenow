import { useCallback, useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDropzone } from 'react-dropzone'
import { Button } from '@/components/atoms/AbsoluteButton'
import { styled, Typography, useTheme } from '@mui/material'
import { Close } from '@mui/icons-material'
import { CreatePost } from '../types'

const Image = styled('img')({
  width: '100%'
})

const DropzoneBox = styled('div')({
  position: 'relative'
})

const baseStyle = {
  flex: 1,
  display: 'grid',
  placeItems: 'center',
  padding: '20px',
  borderWidth: 2,
  height: '10rem',
  marginBottom: '1rem',
  borderRadius: 2,
  borderStyle: 'dashed',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
}

type Props = {
  image?: CreatePost['picture']
  children: React.ReactNode
}

export const Dropzone = ({ image, children }: Props) => {
  const { palette } = useTheme()
  const { register, unregister, setValue } = useFormContext()

  useEffect(() => {
    register('picture')
  }, [register, unregister])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setValue('picture', acceptedFiles[0], { shouldValidate: true })
  }, [setValue])

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({ onDrop, accept: { 'image/*': [] } })

  const style = useMemo(() => ({
    ...{
      ...baseStyle,
      backgroundColor: palette.grey[50],
      borderColor: palette.grey[300],
      color: palette.grey[400]
    },
    ...(isFocused ? { borderColor: palette.primary.light } :
      {}
    ),
    ...(isDragReject ? { borderColor: palette.error.main } : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject,
  ]);

  return (
    <DropzoneBox>
      {children}
      <div {...getRootProps({ style })}>
        <input
          {...getInputProps()}
        />
        <Typography>
          Drag and drop an image.
        </Typography>
      </div>
      {
        image && (
          <div>
            <Image
              src={URL.createObjectURL(image)}
              alt={image.name}
            />
          </div>
        )
      }
    </DropzoneBox>
  )

}