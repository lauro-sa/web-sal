import React from "react";

// Animaciones
import { motion, AnimatePresence } from "framer-motion";

// Componentes
import TransicionDeMovimiento from "./TransicionDeMovimiento";

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ModalProyectos = ({ project, onClose }) => {
  if (!project) return null;

  const renderImages = () => {
    const images = project.images;
    return (
      <TransicionDeMovimiento type="entrarDesdeCentro">
        <div className="h-80 w-full flex ">
          {images.length === 1 ? (
            <img
              src={images[0]}
              alt={`Project ${project.title} - Image 1`}
              className="rounded-md object-cover h-full w-full"
            />
          ) : images.length === 2 ? (
            <div className="w-full flex">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Project ${project.title} - Image ${index + 1}`}
                  className="rounded-md object-cover h-full w-1/2 p-1"
                />
              ))}
            </div>
          ) : (
            <div className="w-full flex my-2 ml-2">
              <div className="flex flex-col w-1/2 mr-2 my-1  items-center justify-center ">
                {images.slice(0, 2).map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Project ${project.title} - Image ${index + 1}`}
                    className="object-cover h-1/2 "
                    style={{ marginBottom: index === 0 ? 4 : 0 }}
                  />
                ))}
              </div>
              <img
                src={images[2]}
                alt={`Project ${project.title} - Image 3`}
                className="object-cover h-full w-1/2 "
              />
            </div>
          )}
        </div>
      </TransicionDeMovimiento>
    );
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-50"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="rounded-lg shadow-lg p-6 z-10 max-w-xl bg-[rgba(1,1,1,0.80)] border border-violeta-marca/50"
            onClick={(e) => e.stopPropagation()}
          >
            {renderImages()}
            <h2 className=" text-lg md:text-xl font-bold mt-4 mb-2 text-center">
              {project.title}
            </h2>
            <p className="text-center text-sm md:text-md mb-8">
              {project.description}
            </p>
            <TransicionDeMovimiento type="entrarDesdeCentro">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3  text-center text-[10px] md:text-sm uppercase tracking-wider font-bold rounded-xl border border-violeta-marca hover:border-violeta-marca hover:bg-violeta-marca/30 hover:text-white transition-colors"
              >
                Mas info
              </a>
            </TransicionDeMovimiento>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalProyectos;
