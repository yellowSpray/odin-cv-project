import { 
  Pagination, 
  PaginationContent, 
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink 
} from "./ui/pagination";

export default function NavForm({ numPage, setPage }: { numPage: number, setPage: React.Dispatch<React.SetStateAction<number>>}) {
    console.log(numPage)
    return (
        <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
                href="#" 
                onClick={(e) => {
                    e.preventDefault()
                    setPage((prev: number) => Math.max(prev - 1, 1))
                }}
            />
          </PaginationItem>

            {[1, 2, 3].map((page) => {
                return (
                    <PaginationItem key={page}>
                        <PaginationLink
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                setPage(page)
                            }}
                            isActive={page === numPage}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                )
            })}

          <PaginationItem>
            <PaginationNext
                href="#"
                onClick={(e) => {
                    e.preventDefault()
                    setPage((prev: number) => Math.min(prev + 1, 3))
                }}
            />
          </PaginationItem>

        </PaginationContent>
      </Pagination>
    )
}