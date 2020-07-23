import java.util.Scanner
fun main(args: Array<String>) {
	val length = readLine()
	val difficulties = readLine()!!.split(' ').map { it.toInt() }

	
	val answer = if (difficulties.sorted().distinct().size >= 3) {
		"YES"
	} else {
		"NO"
	}
	
	print(answer)
}