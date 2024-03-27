import Generator from './components/generator';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Generator />
      </div>
      <div className="footer">
        <hr />
        <p className="text-center mt-2 text-lg">
          Oficina de la libertad avanza alejandra
        </p>
      </div>
    </div>
  );
}
