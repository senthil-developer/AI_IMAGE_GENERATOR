'use client';

import { SingleImageDropzone } from './UploadFile';
import { useEdgeStore } from './edgestore';
import { useState } from 'react';
import { useImage } from './store/UseStore';


export default function SingleImageDropzoneUsage() {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const setImageUrl = useImage((state:any)=>state.setImageUrl)
  setImageUrl(file)
  return (
    <div>
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file);
          setImageUrl(file)
        }}
        {...setImageUrl(file)}
      />

    </div>
  );
}