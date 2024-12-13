"use client";
import { CldImage, CldUploadWidget } from 'next-cloudinary';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page() {
    return (
        <>
            <CldUploadWidget uploadPreset="vg2024" onUploadAdded={async done => console.log({ done, publicId: done.info })} onPublicId={id => console.log({ id })} onQueuesEnd={que => console.log({ que })}>
                {({ open }) => {
                    return (
                        <button className="my-button" onClick={() => open()}>
                            Upload Image
                        </button>
                    )
                }}
            </CldUploadWidget>
            <CldImage alt="" src='nnhgw95cuzys72zze3lq' width={200} height={200} />
        </>
    );
}