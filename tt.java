public class tt{
    public static void main(String[] args){
        int k=6;
        int pp=9630;
        int x=0;
        while(pp<=24000){
            x=(-2*k*pp)/(1-2*k);
            x=x+6;
            System.out.println("指數="+x+"時+1口="+(k+1)+"口, 資金="+x*50/3.0*(k+1));
            pp=x;
            k++;
        }
        /*for(int i=0;i<=1;i++){
            pp*50/3.0*k+(x-pp)*50*k=x*50/3.0*(k+1);
            x=(-2*k*pp)/(1-2*k);
            System.out.println("指數="+x+"時+1口="+(k+1)+"口");
            pp=x;
            k++;

        }*/
    }
}   