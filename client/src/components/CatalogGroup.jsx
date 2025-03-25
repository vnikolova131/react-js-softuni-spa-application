export default function CatalogGroup() {
    <a key={product.id} href={product.href} className="group">
    <img
      alt={product.imageAlt}
      src={product.imageSrc}
      className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
    />
    <h3 className="mt-4 text-sm text-gray-700">{product.level}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">{product.name}</p>
  </a>
}