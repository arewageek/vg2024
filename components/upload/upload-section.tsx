"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { useState } from "react";

export function UploadSection() {
  const [isUploading, setIsUploading] = useState(false);
  const [myUploads, setMyUploads] = useState<string[]>([]);

  const handleUpload = () => {
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      setMyUploads(prev => [...prev, "https://images.unsplash.com/photo-1519741497674-611481863552"]);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-surface rounded-2xl p-6 shadow-lg border border-primary/10 overflow-hidden"
          onClick={handleUpload}
        >
          <motion.div
            className="border-2 border-dashed border-primary/30 rounded-xl p-8 text-center cursor-pointer 
                       hover:border-primary-light transition-colors relative z-10"
            initial={false}
            animate={isUploading ? { borderColor: "rgba(46, 111, 64, 0.5)" } : {}}
          >
            <AnimatePresence mode="wait">
              {isUploading ? (
                <motion.div
                  key="uploading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-surface/80 backdrop-blur-sm"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Loader2 className="w-8 h-8 text-primary" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="upload-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Upload Your Photos
                  </h3>
                  <p className="text-text-muted text-sm">
                    Share your favorite moments from #VG2024
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {myUploads.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-surface rounded-2xl p-6 shadow-lg border border-primary/10"
        >
          <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <ImageIcon className="w-5 h-5" />
            My Uploads
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {myUploads.map((upload, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={upload}
                  alt={`Upload ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}